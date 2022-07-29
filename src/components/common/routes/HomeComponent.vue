<template>
  <div class="master-container">
    <HeaderComponent
      :isHeaderScrolled="isScrollYInScrolledState"
      :channelsList="channelsList"
      :languagesList="languageConfigList"
      :selectedChannelId="selectedChannelId"
      :userConfig="config"
      @sign-up-clicked="onSignUpClicked"
      @sign-in-clicked="onSignInClicked"
      @on-select-language="onSelectLanguage"
      @on-log-out="onLogout"
    />

    <div class="content-container">
      <div class="swiper-component-container" v-if="carouselItems.length > 0">
        <swiper
          class="swiper gallery-top"
          :options="swiperOptionTop"
          ref="swiperTop"
        >
          <swiper-slide
            v-for="(item, index) in carouselItems"
            :key="`carousel-top-item-${index}`"
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
            v-for="(item, index) in carouselItems"
            :key="`carousel-gallery-item-${index}`"
          >
            <div class="swiper-gallery-thumbs-text-container">
              <span class="swiper-gallery-thumbs-text">{{ item.title }}</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="video-list-album-category-content-container">
        <div v-if="albumItems.length > 0">
          <div
            v-for="(item, index) in albumItems"
            :key="`album-master-item-${index}`"
          >
            <AlbumMasterItem
              :gridColumnsPerItem="6"
              :gridRowsPerItem="2"
              :isRecommendedItem="false"
              :albumTitleText="item.name"
              :albumDataItems="item.items"
              @on-open-album-item="onOpenAlbumItem"
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
      selectedChannelId: "1001",
      channelsList: [],
      languageConfigList: [],
      albumItems: [],
      carouselItems: [],
      showLoginDialog: false,
      scrollYPosition: 0,
      isScrollYInScrolledState: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);

    this.onLoadEveryDataInVideoList();
  },
  computed: {
    ...mapGetters({
      config: "getConfig",
    }),
  },
  methods: {
    async onLoadChannelSetupItem() {
      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/channel/${this.selectedChannelId}.json?id=${this.selectedChannelId}&channelId=${this.selectedChannelId}`,
        {
          useCredentials: true,
        }
      );

      if (response.status === SUCCESS_RESPONSE) {
        const data = response.data;
        const pageProps = data.pageProps;

        this.channelsList = pageProps.channels;
        this.languageConfigList = pageProps.langConfig;
      }
    },
    async onLoadVideoFromChannelItem() {
      const response = await axios.get(
        `https://www.iflix.com/api/channel?id=${this.selectedChannelId}`,
        {
          useCredentials: true,
        }
      );

      if (response.status === SUCCESS_RESPONSE) {
        const modules = response.data.response.modules;

        const albumItems = modules.filter(
          (item) => item.type === MODULE_TYPE_MODULE_ITEMS
        );
        this.albumItems = albumItems;

        const carouselItems = modules.filter(
          (item) => item.type === MODULE_TYPE_CAROUSEL
        );

        if (carouselItems.length > 0) {
          const carouselItem = carouselItems[0];
          const carouselLists = carouselItem.items;

          this.carouselItems = carouselLists;

          this.$nextTick(() => {
            this.swiperOptionTop.loopedSlides = this.carouselItems.length;
            this.swiperOptionThumbs.loopedSlides = this.carouselItems.length;
            const swiperTop = this.$refs.swiperTop.$swiper;
            const swiperThumbs = this.$refs.swiperThumbs.$swiper;
            swiperTop.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiperTop;
          });
        }
      }
    },
    async onLoadEveryDataInVideoList() {
      await this.onLoadChannelSetupItem();
      await this.onLoadVideoFromChannelItem();
    },
    openBrowserUrl(url) {
      window.open(url, "_blank").focus();
    },
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    onLogout() {
      const configToUpdate = {
        token: null,
        username: null,
        isLoggedIn: false,
      };
      this.$store.commit("updateConfig", configToUpdate);
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
    updateScroll() {
      this.scrollYPosition = window.scrollY;
      this.isScrollYInScrolledState = this.scrollYPosition > HEADER_HEIGHT;
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
</style>
