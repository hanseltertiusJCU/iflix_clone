<template>
  <!-- todo : header component -->
  <div>
    <HeaderComponent
      :isHeaderScrolled="isScrollYInScrolledState"
      :channelsList="channelsList"
      :languagesList="languageConfigList"
      :selectedChannelId="selectedChannelId"
      :selectedLanguageId="selectedLanguageId"
      :isLoggedIn="false"
    />

    <!-- todo : content container, the page implementation should be change, where the content should be the content as well as the footer -->
    <div class="content-container">
      <div class="swiper-component-container">
        <swiper
          class="swiper gallery-top"
          :options="swiperOptionTop"
          ref="swiperTop"
        >
          <swiper-slide
            v-for="(item, index) in carouselItems.items"
            :key="index"
          >
            <div
              class="swiper-gallery-top-image-container"
              @click="onOpenCarouselItem(item)"
            >
              <img class="swiper-gallery-top-image" :src="item.pic" alt="" />
            </div>
          </swiper-slide>
          <div
            class="swiper-button-next swiper-button-white"
            slot="button-next"
          ></div>
          <div
            class="swiper-button-prev swiper-button-white"
            slot="button-prev"
          ></div>
        </swiper>

        <swiper
          class="swiper gallery-thumbs"
          :options="swiperOptionThumbs"
          ref="swiperThumbs"
        >
          <swiper-slide
            v-for="(item, index) in carouselItems.items"
            :key="index"
          >
            <!-- todo : container -->
            <div class="swiper-gallery-thumbs-text-container">
              <span class="swiper-gallery-thumbs-text">{{ item.title }}</span>
            </div>
            <!-- todo : text-container -->
          </swiper-slide>
        </swiper>
      </div>

      <!-- TODO : we will do the layout for the video upload data -->

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

                <!-- todo : after the switch, we need to provide a text input field, disabled when logged out, enabled when logged in -->
                <div class="video-player-input-field-container">
                  <v-text-field
                    :disabled="isNotLoggedIn"
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
                  <div class="video-player-login-prompt-input">
                    <span class="video-player-login-button">Log in</span>
                    &nbsp;to join the comments
                  </div>
                </div>

                <div class="tw-flex-none">
                  <v-btn
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
              {{ detailedVideoItemInfo.title }}
            </div>

            <div class="video-player-tags-list">
              <div
                v-if="Object.keys(detailedVideoItemInfo.imgtag_ver).length > 0"
              >
                <div
                  v-for="(item, index) in detailedVideoItemInfo.imgtag_ver"
                  :key="index"
                >
                  <ImageTag :text="item.text" :color="item.color" />
                </div>
              </div>
            </div>

            <div class="video-player-episodes-list">
              <div v-for="(item, index) in videosList" :key="index">
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

      <AlbumMasterItem
        :gridColumnsPerItem="6"
        :gridRowsPerItem="2"
        :isRecommendedItem="false"
        :albumTitleText="albumItem.name"
        :albumDataItems="albumItem.items"
        @on-open-album-item="onOpenAlbumItem"
      />

      <!-- temporary code -->
      <div class="tw-mb-16"></div>

      <!-- TODO : implement based on hot item list -->
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

      <!-- todo : need to have a video player component -->

      <!-- todo : need to have a navigation for album list -->

      <div class="video-detail-info-container">
        <!-- TODO : title should be used from attribute "title" -->
        <div class="video-detail-info-title">Video Detail Item Title Test</div>

        <div class="video-detail-info-tags-container">
          <!-- TODO : the first item should be -> the horizontal thing should be from the attribute "imgtag_ver", will use for loop for that -->
          <div class="video-detail-info-tag-item">
            <div class="video-detail-info-tag-item-decoration"></div>
            <!-- todo : we will use the attribute "text" for that -->
            <span>Tag Item Test</span>
          </div>

          <!-- TODO : the second item should be share, basically we want to use the v-menu thing -->
          <v-menu open-on-hover bottom offset-y :close-on-content-click="false">
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
                          class="tw-rounded-none"
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
                          class="tw-rounded-none"
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
            <!-- todo : must use from attribute "description" -->
            <div class="video-detail-description-content-expanded">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae nemo alias consequuntur laborum rem, itaque ullam natus
              quasi et velit incidunt, unde cupiditate veritatis quaerat neque
              dolore aut! Et quo molestias ratione omnis corrupti cum non iure
              cupiditate ipsum maxime deleniti commodi minus, veniam, quibusdam
              temporibus? Possimus et esse eveniet maxime nemo. Alias sint ipsam
              cupiditate fugiat iure quo vero quasi ipsum totam sunt enim fugit
              tempora, dolorum harum nihil ad nostrum veniam quam dolores
              architecto expedita similique quaerat distinctio. Non quisquam
              fuga ut in aperiam consectetur inventore possimus vel, odit dicta
              amet deserunt molestias dignissimos natus? Blanditiis eius
              reprehenderit sequi et, voluptatum ducimus, cum aspernatur
              consequatur nostrum consequuntur quidem accusamus corrupti.
              Tenetur a doloremque nam reprehenderit magni molestiae aliquid.
              Explicabo esse deserunt eum sint! Aut dignissimos, nemo eaque
              fugiat animi nam hic dolores omnis deleniti dolor in laborum nisi
              veniam consectetur harum nihil. Non corrupti quia porro placeat
              eligendi, sint consequatur esse fuga hic? Ducimus veritatis
              reprehenderit fuga ut atque ipsum unde? Id quas esse mollitia
              eligendi deserunt ea dolore maxime error soluta facilis recusandae
              tenetur asperiores debitis quo modi illo, vero, excepturi
              molestiae dolores aliquid? Ad qui ratione laboriosam dignissimos
              ducimus? Ad enim voluptas id officiis? Numquam odio saepe
              voluptate ipsam sed, unde ratione magni et, harum officiis
              asperiores impedit consequuntur, laudantium voluptatibus nisi nam
              pariatur obcaecati nulla maxime quisquam eaque. Fugit, odit
              voluptate incidunt eveniet magnam in neque vel minus delectus
              harum dicta, temporibus reiciendis impedit laborum mollitia velit
              dolore architecto quidem, nobis beatae laudantium. Odit, earum?
              Autem vel facilis dolorum veritatis, culpa ratione, et voluptate
              voluptatum eius non molestias tempora error laudantium facere
              officia accusantium expedita. Reiciendis, aliquid. Porro veritatis
              itaque voluptate hic possimus voluptatum saepe incidunt similique,
              expedita error velit fugit nisi repudiandae sunt dicta fugiat et
              magnam? Maiores, ratione quia. Iure doloremque ratione quisquam
              obcaecati quos saepe provident tempore veniam quibusdam, nesciunt
              exercitationem dolorem quia adipisci ipsum fuga consequuntur fugit
              nam, ex deserunt quam numquam! Tempore blanditiis dolorem dolore
              illum minus ad soluta incidunt omnis repudiandae mollitia deserunt
              magni assumenda rem ratione amet sint dolores nulla, voluptatem
              impedit unde velit adipisci qui consequuntur molestiae. Odio
              similique laboriosam repudiandae quasi deserunt nulla optio veniam
              consequatur ea voluptas corporis modi provident commodi enim,
              sequi consectetur rerum, rem, ducimus perferendis. Expedita,
              suscipit sunt minus dicta, atque dolorem accusantium, architecto
              dignissimos reprehenderit unde labore necessitatibus placeat
              accusamus vitae. Perferendis voluptatem cupiditate hic
              accusantium. Et nobis molestiae inventore a?
            </div>
          </div>
          <div v-else>
            <!-- todo : must use from attribute "description" -->
            <div class="video-detail-description-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae nemo alias consequuntur laborum rem, itaque ullam natus
              quasi et velit incidunt, unde cupiditate veritatis quaerat neque
              dolore aut! Et quo molestias ratione omnis corrupti cum non iure
              cupiditate ipsum maxime deleniti commodi minus, veniam, quibusdam
              temporibus? Possimus et esse eveniet maxime nemo. Alias sint ipsam
              cupiditate fugiat iure quo vero quasi ipsum totam sunt enim fugit
              tempora, dolorum harum nihil ad nostrum veniam quam dolores
              architecto expedita similique quaerat distinctio. Non quisquam
              fuga ut in aperiam consectetur inventore possimus vel, odit dicta
              amet deserunt molestias dignissimos natus? Blanditiis eius
              reprehenderit sequi et, voluptatum ducimus, cum aspernatur
              consequatur nostrum consequuntur quidem accusamus corrupti.
              Tenetur a doloremque nam reprehenderit magni molestiae aliquid.
              Explicabo esse deserunt eum sint! Aut dignissimos, nemo eaque
              fugiat animi nam hic dolores omnis deleniti dolor in laborum nisi
              veniam consectetur harum nihil. Non corrupti quia porro placeat
              eligendi, sint consequatur esse fuga hic? Ducimus veritatis
              reprehenderit fuga ut atque ipsum unde? Id quas esse mollitia
              eligendi deserunt ea dolore maxime error soluta facilis recusandae
              tenetur asperiores debitis quo modi illo, vero, excepturi
              molestiae dolores aliquid? Ad qui ratione laboriosam dignissimos
              ducimus? Ad enim voluptas id officiis? Numquam odio saepe
              voluptate ipsam sed, unde ratione magni et, harum officiis
              asperiores impedit consequuntur, laudantium voluptatibus nisi nam
              pariatur obcaecati nulla maxime quisquam eaque. Fugit, odit
              voluptate incidunt eveniet magnam in neque vel minus delectus
              harum dicta, temporibus reiciendis impedit laborum mollitia velit
              dolore architecto quidem, nobis beatae laudantium. Odit, earum?
              Autem vel facilis dolorum veritatis, culpa ratione, et voluptate
              voluptatum eius non molestias tempora error laudantium facere
              officia accusantium expedita. Reiciendis, aliquid. Porro veritatis
              itaque voluptate hic possimus voluptatum saepe incidunt similique,
              expedita error velit fugit nisi repudiandae sunt dicta fugiat et
              magnam? Maiores, ratione quia. Iure doloremque ratione quisquam
              obcaecati quos saepe provident tempore veniam quibusdam, nesciunt
              exercitationem dolorem quia adipisci ipsum fuga consequuntur fugit
              nam, ex deserunt quam numquam! Tempore blanditiis dolorem dolore
              illum minus ad soluta incidunt omnis repudiandae mollitia deserunt
              magni assumenda rem ratione amet sint dolores nulla, voluptatem
              impedit unde velit adipisci qui consequuntur molestiae. Odio
              similique laboriosam repudiandae quasi deserunt nulla optio veniam
              consequatur ea voluptas corporis modi provident commodi enim,
              sequi consectetur rerum, rem, ducimus perferendis. Expedita,
              suscipit sunt minus dicta, atque dolorem accusantium, architecto
              dignissimos reprehenderit unde labore necessitatibus placeat
              accusamus vitae. Perferendis voluptatem cupiditate hic
              accusantium. Et nobis molestiae inventore a?
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
      </div>
    </div>

    <footer class="footer-container">
      <div class="copyright-footer-section">
        <div>
          <div>
            Copyright © 2016-{{ new Date().getFullYear() }} Image Future
            Investment (HK) Limited.
          </div>
          <div class="footer-navigation-section">
            <a
              class="footer-menu-link-item"
              href="https://wetv.vip/static/terms-en.html"
              >Term of Service</a
            >
            <span>|</span>
            <a
              class="footer-menu-link-item"
              href="https://static.wetvinfo.com/static/policyview/web/viewer.html?t=privacy_iflix&a=en"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              class="footer-menu-link-item"
              href="https://static.wetvinfo.com/static/policyview/web/viewer.html?t=cookie_iflix&a=en"
              >Cookie Policy</a
            >
            <span>|</span>
            <a
              class="footer-menu-link-item"
              href="https://www.facebook.com/iflixID/"
              >Feedback</a
            >
            <span>|</span>
            <a
              class="footer-menu-link-item"
              href="https://wetv.vip/static/help.html?language=en&areacode=153513"
              >FAQs</a
            >
            <span>|</span>
            <div class="facebook-icon-container">
              <img
                src="@/assets/img/facebook-icon.svg"
                class="facebook-icon-image"
                alt=""
              />
              <a
                class="footer-menu-link-item"
                href="https://www.facebook.com/iflixID/"
                >@iflix</a
              >
            </div>
          </div>
        </div>

        <div class="qr-code-footer-container">
          <img
            src="@/assets/img/qr-code.png"
            alt=""
            class="qr-code-image-footer"
          />
          <div class="qr-code-text-instruction">
            <div>Scan QR code to</div>
            <div>download App Now!</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  HEADER_HEIGHT,
  DETAILED_VIDEO_ITEM_INFO,
  VIDEOS_LIST,
  CAROUSEL_ITEMS,
  HOT_ITEMS,
  ALBUM_ITEM,
  RECOMMENDATION_LIST,
  CHANNELS_LIST,
  LANGUAGES_CONFIG_LIST,
} from "@/constants";
import ImageTag from "@/components/common/ImageTag.vue";
import VideoTag from "@/components/common/VideoTag.vue";
import EpisodeItem from "@/components/common/EpisodeItem.vue";
import HotItem from "@/components/common/HotItem.vue";
import AlbumItem from "@/components/common/AlbumItem.vue";
import AlbumMasterItem from "@/components/common/AlbumMasterItem.vue";
import LoginDialog from "@/components/common/LoginDialog.vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

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
    HeaderComponent,
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loopedSlides: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 1,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      selectedVideoId: "c0040l97su8",
      selectedChannelId: "1001",
      selectedLanguageId: 1491988,
      enableBubbleComments: false,
      // we will use the data
      channelsList: CHANNELS_LIST,
      languageConfigList: LANGUAGES_CONFIG_LIST,
      albumItem: ALBUM_ITEM,
      recommendationList: RECOMMENDATION_LIST,
      hotItems: HOT_ITEMS,
      carouselItems: CAROUSEL_ITEMS,
      detailedVideoItemInfo: DETAILED_VIDEO_ITEM_INFO,
      videosList: VIDEOS_LIST,
      isNotLoggedIn: true,
      urlToCopy:
        "https://www.iflix.com/en/play/r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003/c0040l97su8-EP1-FULLMETAL-ALCHEMIST-2003",
      codeToCopy:
        '<iframe frameborder="0" src="https://www.iflix.com/en/play/r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003/c0040l97su8-EP1-FULLMETAL-ALCHEMIST-2003" allowFullScreen="true"></iframe>',
      isDescriptionExpanded: false,
      scrollYPosition: 0,
      isScrollYInScrolledState: false,
      showProfileDialog: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);

    // change the looped slides into the length of the carousel if there are any data
    this.$nextTick(() => {
      this.swiperOptionTop.loopedSlides = this.carouselItems.items.length;
      this.swiperOptionThumbs.loopedSlides = this.carouselItems.items.length;
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    isSelectedEpisodeItem(item) {
      return item.vid === this.selectedVideoId;
    },
    onSignUpClicked(item) {
      /**
       * TODO :
       * this one should use the calling function into the axios,
       * we will use the JSON
       *
       * Method : POST
       * Endpoint : https://movie-api-sample.herokuapp.com/api/v1/user/register
       *
       * input will be an object with the attribute of :
       * "username"
       * "password"
       * "first_name"
       * "last_name"
       * "email"
       *
       * We will enter the activation link
       *
       * After that, we try to store the input into the VueX Store
       */
      console.log("sign up clicked with item : ", item);
    },
    onSignInClicked(item) {
      /**
       * TODO :
       * this one should use the calling function into the axios,
       * we will use the JSON
       *
       * Method : POST
       * Endpoint : https://movie-api-sample.herokuapp.com/api/v1/user/login
       *
       * input will be an object with the attribute of :
       * "username"
       * "password"
       *
       * We try to store the input into the VueX Store
       */
      console.log("sign in clicked with item : ", item);
    },
    onOpenCarouselItem(item) {
      console.log("open carousel item : ", item);
    },
    onOpenAlbumItem(item) {
      console.log("open album item : ", item);
    },
    onSelectEpisodeItem(item) {
      console.log("select episode item : ", item);
    },
    onOpenHotItem(item) {
      console.log("open hot item : ", item);
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
.v-application ol,
.v-application ul {
  padding: 0;
}

.header-container-light {
  @apply tw-grid;
  @apply tw-grid-cols-1;
  @apply tw-place-content-center;
  @apply tw-bg-[#FFF];
  @apply tw-w-full;
  @apply tw-h-[80px];
  @apply tw-shadow-md;
  @apply tw-z-10;
  position: fixed;
  top: 0;
}

.header-container-dark {
  @apply tw-grid;
  @apply tw-grid-cols-1;
  @apply tw-place-content-center;
  @apply tw-bg-[#000];
  @apply tw-w-full;
  @apply tw-h-[80px];
  @apply tw-shadow-md;
  @apply tw-z-10;
  position: fixed;
  top: 0;
}

.navigation-bar-container {
  @apply tw-flex;
  @apply tw-justify-between;
  @apply tw-items-center;
  @apply tw-align-middle;
  @apply tw-mx-32;
  @apply tw-my-auto;
  @apply tw-no-underline;
}

.navigation-link-container {
  @apply tw-flex;
  @apply tw-flex-none;
  @apply tw-flex-row;
}

.navigation-link-list-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
  @apply tw-list-none;
}

.navigation-misc-container {
  @apply tw-flex;
  @apply tw-flex-1;
  @apply tw-flex-row;
  @apply tw-items-center;
  @apply tw-space-x-4;
  @apply tw-ml-16;
}

.history-checkbox-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-justify-center;
  @apply tw-space-x-2;
}

.navigation-menu-link-item-light {
  @apply tw-text-black;
  @apply tw-no-underline;
  @apply tw-px-4;
}

.selected-language-text-dark {
  @apply tw-text-white;
}

.selected-language-text-light {
  @apply tw-text-black;
}

.sign-up-menu-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
  @apply tw-mb-6;
}

.back-button-sign-up-menu-container {
  @apply tw-flex-none;
}

.title-sign-up-menu-container {
  @apply tw-flex-1;
  text-align: center;
}

.navigation-menu-link-item-dark {
  @apply tw-text-white;
  @apply tw-no-underline;
  @apply tw-px-4;
}

.navigation-menu-link-item-selected {
  @apply tw-text-[#ff4a22];
  @apply tw-font-bold;
  @apply tw-no-underline;
  @apply tw-px-4;
}

.v-btn {
  text-transform: none;
  letter-spacing: 0;
}

.dialog-account-btn {
  opacity: 1;
  color: white;
}

.dialog-account-btn-disabled {
  opacity: 0.2;
}

.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #ff4a21 !important;
  color: #fff !important;
}

.sign-up-button {
  color: #ff4a22;
}

.sign-up-button:hover,
.checkbox-text-item:hover,
.navigation-menu-link-item-light:hover,
.navigation-menu-link-item-dark:hover {
  color: #ff4a22 !important;
  cursor: pointer;
}

.back-button-icon:hover,
.close-dialog-button-icon:hover,
.profile-picture-container:hover {
  cursor: pointer;
}

.download-card-title {
  display: block;
  text-align: center;
}

.qr-code-image {
  width: 120px;
  height: 120px;
}

.content-container {
  @apply tw-min-h-screen;
  @apply tw-z-0;
  @apply tw-pt-[80px];
}

.swiper-component-container {
  @apply tw-h-[75vh];
  @apply tw-bg-black;
}

.swiper .swiper-slide {
  @apply tw-bg-cover;
  @apply tw-bg-center;
}

.swiper.gallery-top {
  @apply tw-h-4/5;
  @apply tw-text-white;
  @apply tw-w-full;
}

.swiper.gallery-top .swiper-gallery-top-image {
  @apply tw-w-full;
  @apply tw-h-full;
  @apply tw-object-cover;
}

.swiper.gallery-top .swiper-gallery-top-image-container:hover,
.swiper-gallery-thumbs-text-container:hover {
  cursor: pointer;
}

.swiper-gallery-thumbs-text-container {
  @apply tw-relative;
  @apply tw-h-max;
  @apply tw-text-white;
  @apply tw-mx-[15px];
}

.swiper-gallery-thumbs-text {
  @apply tw-text-[20px];
  @apply tw-font-bold;
}

.swiper.gallery-thumbs {
  @apply tw-h-1/5;
  @apply tw-box-border;
  @apply tw-py-[20px];
  @apply tw-px-[5px];
}

.swiper.gallery-thumbs .swiper-gallery-thumbs-image {
  @apply tw-w-full;
  @apply tw-h-full;
  @apply tw-object-cover;
  @apply tw-mx-[10px];
}

.swiper.gallery-thumbs .swiper-slide {
  @apply tw-w-max;
  @apply tw-h-full;
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
  @apply tw-opacity-40;
}

.swiper.gallery-thumbs
  .swiper-slide-active
  .swiper-gallery-thumbs-text-container::before {
  @apply tw-absolute;
  @apply tw--left-[6px];
  @apply tw-top-[2px];
  @apply tw-w-[3px];
  @apply tw-h-full;
  @apply tw-bg-[#ff4a22];
  @apply tw-rounded-sm;
  @apply tw--skew-x-[15deg];
  @apply tw--skew-y-[15deg];
  content: "";
}

.swiper.gallery-thumbs .swiper-slide-active {
  @apply tw-opacity-100;
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
}
.video-player-episodes-list {
  @apply tw-grid;
  @apply tw-grid-cols-5;
  @apply tw-gap-4;
}

.hot-item-master-container {
  @apply tw-flex;
  @apply tw-flex-col;
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

.footer-container {
  @apply tw-bg-[#f6f6f6];
  @apply tw-text-[#999];
  @apply tw-font-bold;
}

.footer-menu-link-item {
  @apply tw-text-[#999];
  @apply tw-no-underline;
}

.footer-menu-link-item:hover {
  @apply tw-text-slate-500;
}

.copyright-footer-section {
  @apply tw-flex;
  @apply tw-justify-between;
  @apply tw-items-center;
  @apply tw-mx-8;
  @apply tw-py-4;
}

.footer-navigation-section {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-space-x-2;
}

.qr-code-text-instruction {
  @apply tw-pr-4;
}

.qr-code-footer-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
  @apply tw-bg-[#fff];
  @apply tw-space-x-2;
}

.qr-code-image-footer {
  width: 64px;
  height: 64px;
}

.facebook-icon-container {
  @apply tw-flex;
  @apply tw-flex-row;
}

.facebook-icon-container:hover {
  cursor: pointer;
}

.facebook-icon-image {
  width: 1rem;
  height: 1rem;
  @apply tw-self-center;
}
</style>
