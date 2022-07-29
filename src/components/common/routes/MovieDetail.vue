<template>
  <div class="master-container">
    <HeaderComponent
      :isHeaderScrolled="isScrollYInScrolledState"
      :channelsList="channelsList"
      :languagesList="languageConfigList"
      selectedChannelId=""
      :userConfig="config"
      @sign-up-clicked="onSignUpClicked"
      @sign-in-clicked="onSignInClicked"
      @on-select-language="onSelectLanguage"
      @on-log-out="onLogout"
    />

    <div class="content-container">
      <!-- Video Player Component -->
      <div class="video-player-component-container">
        <div class="video-player-content-container">
          <div class="video-player-main-container">
            <div class="video-player-video-container"></div>
            <div class="video-player-bottom-container">
              <div class="video-player-bottom-content">
                <div class="tw-flex-none">
                  <v-switch
                    v-model="enableBubbleComments"
                    color="#ff4a22"
                  ></v-switch>
                </div>

                <div class="video-player-input-field-container">
                  <v-text-field
                    :disabled="!config.isLoggedIn"
                    v-model="commentInput"
                    class="video-player-input-field"
                    label=""
                    placeholder=""
                    filled
                    dense
                    flat
                    solo
                    dark
                    hide-details
                    background-color="#000"
                  ></v-text-field>
                  <div
                    class="video-player-login-prompt-input"
                    v-if="!config.isLoggedIn"
                  >
                    <span
                      @click.stop="showLoginDialog = true"
                      class="video-player-login-button"
                      >Log in</span
                    >
                    &nbsp;to join the comments
                  </div>
                  <LoginDialog
                    v-model="showLoginDialog"
                    @sign-up-clicked="onSignUpClicked"
                    @sign-in-clicked="onSignInClicked"
                  />
                </div>

                <div class="tw-flex-none">
                  <v-btn
                    @click="onResetCommentInput"
                    class="video-player-button"
                    color="rgba(41,42,60,0.6)"
                    tile
                    >Send</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="video-player-list-container">
            <div class="video-player-title-text">
              {{ detailedVideoItemInfoTitleText }}
            </div>

            <div
              class="video-player-tags-list"
              v-if="Object.keys(detailedVideoItemInfoImgTagVer).length > 0"
            >
              <div
                v-for="(item, index) in detailedVideoItemInfoImgTagVer"
                :key="index"
              >
                <ImageTag :text="item.text" :color="item.color" />
              </div>
            </div>

            <div class="video-player-episodes-list">
              <div v-for="(item, index) in episodesList" :key="index">
                <EpisodeItem
                  :episodeItem="item"
                  :episodeText="item.episode"
                  :isSelected="isSelectedEpisodeItem(item)"
                  @on-load-episode="onSelectEpisodeItem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="video-detail-information-content-container">
        <div class="video-detail-info-container">
          <div class="video-detail-info-title">
            {{ detailedVideoItemInfoTitleText }}
          </div>

          <div class="video-detail-info-tags-container">
            <div
              class="video-detail-info-tag-item"
              v-for="(item, index) in detailedVideoItemInfoImgTagVer"
              :key="index"
            >
              <div class="video-detail-info-tag-item">
                <div class="video-detail-info-tag-item-decoration"></div>
                <span>{{ item.text }}</span>
              </div>
            </div>

            <v-menu
              open-on-hover
              bottom
              offset-y
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="video-detail-share-container"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon class="video-detail-share-icon"
                    >mdi-export-variant</v-icon
                  >
                  <span>Share</span>
                </div>
              </template>

              <v-card min-width="420">
                <v-card-text>
                  <div class="share-url-container">
                    <div class="share-main-section-container">
                      <div class="share-social-media-container">
                        <div class="share-social-media-item">
                          <a href="https://www.facebook.com/" target="_blank">
                            <img
                              class="share-social-media-item-image"
                              src="@/assets/img/facebook-icon.png"
                              alt=""
                            />
                          </a>
                        </div>

                        <div class="share-social-media-item">
                          <a href="https://twitter.com/" target="_blank">
                            <img
                              class="share-social-media-item-image"
                              src="@/assets/img/twitter-icon.png"
                              alt=""
                            />
                          </a>
                        </div>

                        <div class="share-social-media-item">
                          <a href="https://line.me/" target="_blank">
                            <img
                              class="share-social-media-item-image"
                              src="@/assets/img/line-icon.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>

                      <div class="share-by-copy-text-container">
                        <div class="share-by-copy-text-item">
                          <v-text-field
                            class="tw-rounded-none"
                            background-color="#ddd"
                            v-model="urlToCopy"
                            height="48px"
                            label=""
                            placeholder=""
                            flat
                            solo
                            filled
                            readonly
                            hide-details
                          ></v-text-field>
                          <v-btn
                            class="share-link-button"
                            width="112px"
                            height="56px"
                            outlined
                            @click="copyLink"
                            >Copy the link</v-btn
                          >
                        </div>
                        <div class="share-by-copy-text-item">
                          <v-text-field
                            class="tw-rounded-none"
                            background-color="#ddd"
                            v-model="codeToCopy"
                            height="48px"
                            label=""
                            placeholder=""
                            flat
                            solo
                            filled
                            readonly
                            hide-details
                          ></v-text-field>
                          <v-btn
                            class="share-link-button"
                            width="112px"
                            height="56px"
                            outlined
                            @click="copyCode"
                            >Copy the code</v-btn
                          >
                        </div>
                      </div>
                    </div>

                    <v-divider vertical></v-divider>

                    <div class="share-qr-code-container">
                      <img
                        src="@/assets/img/qr-code-in-video-detail.png"
                        alt=""
                      />
                      <div>Scan the QR code to download the mobile app!</div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-menu>
          </div>

          <div class="video-detail-description-container">
            <div v-if="isDescriptionExpanded">
              <div class="video-detail-description-content-expanded">
                {{ detailedVideoItemInfoDescriptionText }}
              </div>
            </div>
            <div v-else>
              <div class="video-detail-description-content">
                {{ detailedVideoItemInfoDescriptionText }}
              </div>
              <div class="video-detail-description-content-shadow"></div>
            </div>

            <div
              class="video-detail-description-toggle-text"
              @click="onToggleDescription"
            >
              {{ isDescriptionExpanded ? "Collapse" : "Expand" }}
            </div>
          </div>

          <div v-if="recommendationList.length > 0">
            <AlbumMasterItem
              :gridColumnsPerItem="4"
              :gridRowsPerItem="2"
              :isRecommendedItem="true"
              albumTitleText="Recommended for you"
              :albumDataItems="recommendationList"
              @on-open-album-item="onOpenAlbumItem"
            />
          </div>
        </div>

        <div class="hot-item-master-container">
          <div class="hot-item-title-text-container">
            <div class="hot-item-title-text">Today's Hot Videos</div>
          </div>
          <div v-for="(item, index) in hotItems" :key="index">
            <HotItem
              :hotItemData="item"
              :rankItemIndex="index"
              @on-hot-item-open="onOpenHotItem"
            />
          </div>
        </div>
      </div>
    </div>

    <SidebarComponent
      @scroll-to-top="scrollToTop"
      @open-browser-url="openBrowserUrl"
    />

    <FooterComponent />
  </div>
</template>

<script>
import {
  HEADER_HEIGHT,
  SUCCESS_RESPONSE,
  CREATED_RESPONSE,
  MODULE_TYPE_MODULE_ITEMS,
  MODULE_TYPE_CAROUSEL,
} from "@/constants";

import ImageTag from "@/components/common/ImageTag.vue";
import VideoTag from "@/components/common/VideoTag.vue";
import EpisodeItem from "@/components/common/EpisodeItem.vue";
import HotItem from "@/components/common/HotItem.vue";
import AlbumItem from "@/components/common/AlbumItem.vue";
import AlbumMasterItem from "@/components/common/AlbumMasterItem.vue";
import LoginDialog from "@/components/common/LoginDialog.vue";
import SidebarComponent from "@/components/common/SidebarComponent.vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  components: {
    ImageTag,
    VideoTag,
    EpisodeItem,
    HotItem,
    AlbumItem,
    AlbumMasterItem,
    LoginDialog,
    Swiper,
    SwiperSlide,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      selectedVideoId: "",
      selectedVideoTitle: "",
      selectedEpisodeId: "",
      selectedEpisodeName: "",
      enableBubbleComments: false,
      commentInput: "",
      channelsList: [],
      languageConfigList: [],
      recommendationList: [],
      hotItems: [],
      detailedVideoItemInfo: {},
      episodesList: [],
      /**
       * Dynamic value of url and code, will set it based on route
       *
       * placeholder :
       * "https://www.iflix.com/en/play/r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003/c0040l97su8-EP1-FULLMETAL-ALCHEMIST-2003"
       */
      urlToCopy: "",
      /**
       * Placeholder :
       * <iframe frameborder="0" src="https://www.iflix.com/en/play/r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003/c0040l97su8-EP1-FULLMETAL-ALCHEMIST-2003" allowFullScreen="true"></iframe>
       *
       * We will use the urlToCopy
       *
       */
      codeToCopy: "",
      isDescriptionExpanded: false,
      showLoginDialog: false,
      scrollYPosition: 0,
      isScrollYInScrolledState: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);

    this.getVideoAndEpisodesInfo();
    this.getUrlToCopy();
    this.getCodeToCopy();

    this.onLoadVideoDetailData();
  },
  computed: {
    ...mapGetters({
      config: "getConfig",
    }),
    detailedVideoItemInfoTitleText() {
      return Object.keys(this.detailedVideoItemInfo).length > 0
        ? this.detailedVideoItemInfo.title
        : "";
    },
    detailedVideoItemInfoImgTagVer() {
      return Object.keys(this.detailedVideoItemInfo).length > 0
        ? this.detailedVideoItemInfo.imgtag_ver
        : {};
    },
    detailedVideoItemInfoDescriptionText() {
      return Object.keys(this.detailedVideoItemInfo).length > 0
        ? this.detailedVideoItemInfo.description
        : "";
    },
  },
  methods: {
    getVideoAndEpisodesInfo() {
      this.selectedVideoId = this.$route.params.videoId;
      this.selectedVideoTitle = this.$route.params.videoName;
      this.selectedEpisodeId = this.$route.params.episodeId;
      this.selectedEpisodeName = this.$route.params.episodeName;
    },
    getUrlToCopy() {
      const urlToBeCopied = `https://www.iflix.com/en/play/${this.selectedVideoId}-${this.selectedVideoTitle}/${this.selectedEpisodeId}-${this.selectedEpisodeName}`;
      this.urlToCopy = urlToBeCopied;
    },
    getCodeToCopy() {
      const codeToBeCopied = `<iframe frameborder="0" src="${this.urlToCopy}" allowFullScreen="true"></iframe>`;
      this.codeToCopy = codeToBeCopied;
    },
    async onLoadVideoDetailData() {
      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${this.selectedVideoId}-${this.selectedVideoTitle}.json?ids=${this.selectedVideoId}-${this.selectedVideoTitle}`,
        {
          useCredentials: true,
        }
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        this.channelsList = pageProps.channels;
        this.languageConfigList = pageProps.langConfig;
        this.hotItems = pageProps.hot;
        this.recommendationList = pageProps.rec;

        this.detailedVideoItemInfo = pageProps.data.coverInfo;
        this.episodesList = pageProps.data.videoList;
      }
    },
    openBrowserUrl(url) {
      window.open(url, "_blank").focus();
    },
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    onResetCommentInput() {
      if (!this.config.isLoggedIn) {
        return;
      }

      this.commentInput = "";
    },
    onLogout() {
      const configToUpdate = {
        token: null,
        username: null,
        isLoggedIn: false,
      };
      this.$store.commit("updateConfig", configToUpdate);
    },
    isSelectedEpisodeItem(item) {
      return item.vid === this.selectedEpisodeId;
    },
    async onSignUpClicked(item) {
      const response = await axios.post(
        "https://movie-api-sample.herokuapp.com/api/v1/user/register",
        item
      );

      if (response.status === CREATED_RESPONSE) {
        const data = response.data;
        await axios.get(data.activation_info.url);
      }
    },
    async onSignInClicked(item) {
      const response = await axios.post(
        "https://movie-api-sample.herokuapp.com/api/v1/user/login",
        item
      );

      if (response.status === SUCCESS_RESPONSE) {
        const data = response.data;
        const configToUpdate = {
          token: data.token,
          username: item.username,
          isLoggedIn: true,
        };
        this.$store.commit("updateConfig", configToUpdate);
      }
    },
    onSelectLanguage(item) {
      const configToUpdate = {
        langId: item.langId,
        langName: item.langName,
        langCode: item.langCode,
      };

      this.$store.commit("updateConfig", configToUpdate);
    },
    async onOpenCarouselItem(item) {
      const videoId = item.id;
      let titleString = item.title.replaceAll(" ", "-");
      titleString = titleString.replaceAll(":", "");

      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${videoId}-${titleString}.json?ids=${videoId}-${titleString}`
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        const videoList = pageProps.data.videoList;

        let episodeTitle;
        let episodeId;

        if (videoList) {
          const firstVideoItem = videoList[0];
          episodeTitle = firstVideoItem.title.replaceAll(" ", "-");
          episodeTitle = episodeTitle.replaceAll(":", "");
          episodeId = firstVideoItem.vid;
        } else {
          const videoInfo = pageProps.data.videoInfo;
          episodeTitle = videoInfo.title.replaceAll(" ", "-");
          episodeTitle = episodeTitle.replaceAll(":", "");
          episodeId = videoInfo.vid;
        }

        this.$router.push({
          name: "MovieDetail",
          params: {
            videoId: videoId,
            videoName: titleString,
            episodeId: episodeId,
            episodeTitle: episodeTitle,
          },
        });
      }
    },
    async onOpenAlbumItem(item) {
      const videoId = item.isRecommendedItem
        ? item.video_ids_country[0]
        : item.id;
      let titleString = item.title.replaceAll(" ", "-");
      titleString = titleString.replaceAll(":", "");

      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${videoId}-${titleString}.json?ids=${videoId}-${titleString}`
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        const videoList = pageProps.data.videoList;

        let episodeTitle;
        let episodeId;

        if (videoList) {
          const firstVideoItem = videoList[0];
          episodeTitle = firstVideoItem.title.replaceAll(" ", "-");
          episodeTitle = episodeTitle.replaceAll(":", "");
          episodeId = firstVideoItem.vid;
        } else {
          const videoInfo = pageProps.data.videoInfo;
          episodeTitle = videoInfo.title.replaceAll(" ", "-");
          episodeTitle = episodeTitle.replaceAll(":", "");
          episodeId = videoInfo.vid;
        }

        this.$router.push({
          name: "MovieDetail",
          params: {
            videoId: videoId,
            videoName: titleString,
            episodeId: episodeId,
            episodeTitle: episodeTitle,
          },
        });
      }
    },
    async onSelectEpisodeItem(item) {
      const videoIdItem = item.vid;
      let videoTitleItem = item.title.replaceAll(" ", "-");
      videoTitleItem = videoTitleItem.replaceAll(":", "");

      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${videoIdItem}-${videoTitleItem}.json?ids=${videoIdItem}-${videoTitleItem}`
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        const videoList = pageProps.data.videoList;

        let episodeTitle;
        let episodeId;

        if (videoList) {
          const firstVideoItem = videoList[0];
          episodeTitle = firstVideoItem.title.replaceAll(" ", "-");
          episodeTitle = episodeTitle.replaceAll(":", "");
          episodeId = firstVideoItem.vid;
        } else {
          const videoInfo = pageProps.data.videoInfo;
          episodeTitle = videoInfo.title.replaceAll(" ", "-");
          episodeTitle = episodeTitle.replaceAll(":", "");
          episodeId = videoInfo.vid;
        }

        this.$router.push({
          name: "MovieDetail",
          params: {
            videoId: videoIdItem,
            videoName: videoTitleItem,
            episodeId: episodeId,
            episodeTitle: episodeTitle,
          },
        });
      }
    },
    async onOpenHotItem(item) {
      const videoIdItem = item.video_ids_country[0];
      let titleItem = item.title.replaceAll(" ", "-");
      titleItem = titleItem.replaceAll(":", "");

      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${videoIdItem}-${titleItem}.json?ids=${videoIdItem}-${titleItem}`
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        const videoList = pageProps.data.videoList;

        let episodeTitle;
        let episodeId;

        if (videoList) {
          const firstVideoItem = videoList[0];
          episodeTitle = firstVideoItem.title.replaceAll(" ", "-");
          episodeTitle = episodeTitle.replaceAll(":", "");
          episodeId = firstVideoItem.vid;
        } else {
          const videoInfo = pageProps.data.videoInfo;
          episodeTitle = videoInfo.title.replaceAll(" ", "-");
          episodeTitle = episodeTitle.replaceAll(":", "");
          episodeId = videoInfo.vid;
        }

        this.$router.push({
          name: "MovieDetail",
          params: {
            videoId: videoIdItem,
            videoName: titleItem,
            episodeId: episodeId,
            episodeTitle: episodeTitle,
          },
        });
      }
    },
    updateScroll() {
      this.scrollYPosition = window.scrollY;
      this.isScrollYInScrolledState = this.scrollYPosition > HEADER_HEIGHT;
    },
    copyLink() {
      navigator.clipboard.writeText(this.urlToCopy);
    },
    copyCode() {
      navigator.clipboard.writeText(this.codeToCopy);
    },
    onToggleDescription() {
      this.isDescriptionExpanded = !this.isDescriptionExpanded;
    },
  },
};
</script>

<style lang="postcss" scoped>
.master-container {
  @apply tw-relative;
}

.content-container {
  @apply tw-min-h-screen;
  @apply tw-z-0;
  @apply tw-pt-[80px];
}

.video-player-component-container {
  @apply tw-h-[75vh];
  @apply tw-bg-[#171a27];
}

.video-player-content-container {
  @apply tw-h-full;
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-text-white;
  @apply tw-mx-[2.5%];
  @apply tw-py-[2.5%];
}

.video-player-main-container {
  @apply tw-flex;
  @apply tw-flex-col;
  @apply tw-w-3/5;
  @apply tw-h-full;
  @apply tw-bg-[#151625];
}

.video-player-video-container {
  @apply tw-flex-1;
  @apply tw-bg-black;
}

.video-player-bottom-container {
  @apply tw-flex;
  @apply tw-justify-end;
  @apply tw-items-center;
  @apply tw-flex-none;
  @apply tw-h-[80px];
}

.video-player-bottom-content {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-w-3/5;
  @apply tw-mr-4;
  @apply tw-items-center;
}

.video-player-input-field-container {
  @apply tw-flex-1;
  @apply tw-relative;
  @apply tw-ml-4;
}

.video-player-input-field {
  @apply tw-rounded-tl-[18px];
  @apply tw-rounded-bl-[18px];
}

.video-player-login-prompt-input {
  @apply tw-absolute;
  @apply tw-h-full;
  @apply tw-bottom-0;
  @apply tw-left-5;
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
  @apply tw-text-[#85868a];
}

.video-player-login-button {
  @apply tw-text-[#ff4a22];
}

.video-player-login-button:hover {
  cursor: pointer;
}

.share-link-button {
  @apply tw-rounded-none;
  @apply tw-text-black !important;
}

button.video-player-button {
  @apply tw-text-white;
  @apply tw-rounded-tr-[18px];
  @apply tw-rounded-br-[18px];
}

.video-player-list-container {
  @apply tw-w-2/5;
  @apply tw-h-full;
  @apply tw-bg-[hsla(0,0%,100%,.1)];
  @apply tw-overflow-y-auto;
  @apply tw-text-white;
  @apply tw-pl-[20px];
  @apply tw-pt-[20px];
}

.video-player-title-text {
  @apply tw-text-[32px];
  @apply tw-truncate;
  @apply tw-mb-3;
}

.video-player-tags-list {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-mb-3;
  @apply tw-space-x-2;
}
.video-player-episodes-list {
  @apply tw-grid;
  @apply tw-grid-cols-5;
  @apply tw-gap-4;
}

.video-list-album-category-content-container {
  @apply tw-flex;
  @apply tw-flex-col;
  @apply tw-px-[2.5%];
  @apply tw-my-[5%];
  @apply tw-space-y-4;
}

.video-detail-information-content-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-px-[2.5%];
  @apply tw-my-[5%];
}

.video-detail-info-container {
  @apply tw-w-3/5;
  @apply tw-h-full;
  @apply tw-mr-6;
}

.hot-item-master-container {
  @apply tw-flex;
  @apply tw-flex-col;
  @apply tw-space-y-4;
  @apply tw-w-2/5;
  @apply tw-h-full;
}

.hot-item-title-text-container {
  @apply tw-mb-4;
}

.hot-item-title-text {
  @apply tw-text-[32px];
  @apply tw-font-bold;
}

.video-detail-info-title {
  @apply tw-text-[32px];
  @apply tw-font-bold;
}

.video-detail-info-tags-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
}

.video-detail-share-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
}

.video-detail-share-icon {
  @apply tw-mr-2;
}

.video-detail-info-tag-item {
  @apply tw-relative;
  @apply tw-px-2;
  @apply tw-mr-2;
}

.video-detail-info-tag-item-decoration {
  @apply tw-absolute;
  @apply tw-left-0;
  @apply tw-top-[3px];
  @apply tw-bottom-[3px];
  @apply tw-w-[4px];
  @apply tw-bg-[#ff4a22];
}

.video-detail-description-container {
  @apply tw-relative;
}

.video-detail-description-content {
  @apply tw-h-[100px];
  @apply tw-overflow-hidden;
}

.video-detail-description-content-shadow {
  @apply tw-absolute;
  @apply tw-left-0;
  @apply tw-right-0;
  @apply tw-bottom-0;
  @apply tw-h-[80px];
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(hsla(0, 0%, 100%, 0.9)),
    to(hsla(0, 0%, 100%, 0))
  );
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0.9),
    hsla(0, 0%, 100%, 0)
  );
}

.video-detail-description-content-expanded {
  @apply tw-h-auto;
}

.video-detail-description-toggle-text {
  @apply tw-opacity-40;
  cursor: pointer;
}

.share-main-section-container {
  @apply tw-mr-8;
  @apply tw-w-[66%];
}

.share-url-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-p-6;
}

.share-social-media-container {
  @apply tw-flex;
  @apply tw-flex-row;
}

.share-social-media-item {
  @apply tw-mr-4;
  @apply tw-w-[48px];
  @apply tw-h-[48px];
  @apply tw-rounded-lg;
}

.share-social-media-item-image {
  @apply tw-w-[48px];
  @apply tw-h-[48px];
  @apply tw-rounded-lg;
  @apply tw-object-cover;
}

.share-by-copy-text-container {
  @apply tw-mt-4;
}

.share-by-copy-text-item {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
  @apply tw-mb-2;
}

.share-qr-code-container {
  @apply tw-ml-8;
  @apply tw-h-[33%];
  @apply tw-text-center;
}
</style>
