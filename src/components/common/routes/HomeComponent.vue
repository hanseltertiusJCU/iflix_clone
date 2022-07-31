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
import { HEADER_HEIGHT } from "@/constants";

import ImageTag from "@/components/common/ImageTag.vue";
import AlbumMasterItem from "@/components/common/AlbumMasterItem.vue";
import LoginDialog from "@/components/common/LoginDialog.vue";
import SidebarComponent from "@/components/common/SidebarComponent.vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";

import DataManagementMixin from "@/mixins/DataManagementMixin.vue";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  mixins: [DataManagementMixin],
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

.video-list-album-category-content-container {
  @apply tw-flex;
  @apply tw-flex-col;
  @apply tw-px-[2.5%];
  @apply tw-my-[5%];
  @apply tw-space-y-4;
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
