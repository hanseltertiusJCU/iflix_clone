<template>
  <div class="hot-item-container">
    <div class="image-on-hot-item-container">
      <img class="image-hot-item" :src="hotItemData.new_pic_hz" alt="" />

      <div class="hot-item-rank-info-container">
        <div class="hot-item-rank-info-decoration"></div>
        <span
          class="hot-item-rank-info-text"
          :style="{ color: `${getHotItemRankColor(rankItemIndex)}` }"
        >
          {{ getHotItemRankNumber(rankItemIndex) }}
        </span>
      </div>

      <div class="hot-item-image-info-container">
        <ImageTag
          :text="
            hotItemData.imgtag_ver[0] ? hotItemData.imgtag_ver[0].text : ''
          "
          :color="
            hotItemData.imgtag_ver[0]
              ? hotItemData.imgtag_ver[0].color
              : 'transparent'
          "
        />
        <span class="tw-text-right" v-if="hotItemData.imgtag_ver[1]">{{
          hotItemData.imgtag_ver[1].text
        }}</span>
      </div>
    </div>

    <div class="text-on-hot-item-container">
      <div class="hot-item-title-container">{{ hotItemData.title }}</div>
      <div class="hot-item-subtitle-container">
        {{ getHotItemSubtitleText(hotItemData) }}
      </div>
    </div>
  </div>
</template>

<script>
import ImageTag from "@/components/common/ImageTag.vue";

export default {
  name: "HotItem",
  components: { ImageTag },
  props: ["hotItemData", "rankItemIndex"],
  methods: {
    onHotItemClick(item) {
      this.$emit("on-load-episode", item);
    },
    getHotItemRankNumber(index) {
      return index + 1;
    },
    getHotItemRankColor(index) {
      const first_item_index = 0;
      const second_item_index = 1;
      const third_item_index = 2;

      switch (index) {
        case first_item_index:
          return "#F22";
        case second_item_index:
          return "#FF4A22";
        case third_item_index:
          return "#FFAD22";
        default:
          return "#071139";
      }
    },
    getHotItemSubtitleText(item) {
      const ifAllEpisodesTheSameAsUpdated =
        item.episode_updated_country === item.episode_all;
      return ifAllEpisodesTheSameAsUpdated
        ? "full"
        : `Updated to ${item.episode_updated_country} EP`;
    },
  },
};
</script>

<style lang="postcss">
.hot-item-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-relative;
  @apply tw-w-[380px];
  @apply tw-h-[80px];
  @apply tw-rounded;
}

.hot-item-container:hover {
  cursor: pointer;
}

.image-on-hot-item-container {
  @apply tw-rounded;
  @apply tw-w-max;
  @apply tw-h-max;
}

.image-hot-item {
  @apply tw-rounded;
  @apply tw-w-[140px];
  @apply tw-h-[80px];
  @apply tw-object-cover;
}

.hot-item-rank-info-container {
  @apply tw-bg-transparent;
  @apply tw-w-[26px];
  @apply tw-h-[46px];
  @apply tw-absolute;
  @apply tw-top-0;
  @apply tw-left-0;
  @apply tw-z-0;
}

.hot-item-rank-info-decoration {
  @apply tw-bg-white;
  @apply tw-px-[3px];
  @apply tw-py-[2px];
  @apply tw-w-full;
  @apply tw-h-full;
  @apply tw-absolute;
  @apply tw-top-0;
  @apply tw-bottom-0;
  @apply tw-left-0;
  @apply tw--z-10;
  -webkit-clip-path: polygon(0 0, 100% 0, 0 100%);
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

.hot-item-rank-info-text {
  @apply tw-text-black;
  @apply tw-z-10;
}

.hot-item-image-info-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-w-[140px];
  @apply tw-justify-between;
  @apply tw-items-center;
  @apply tw-px-2;
  @apply tw-pb-1;
  @apply tw-text-white;
  @apply tw-absolute;
  @apply tw-bottom-0;
  @apply tw-left-0;
}

.text-on-hot-item-container {
  @apply tw-flex;
  @apply tw-w-[240px];
  @apply tw-h-full;
  @apply tw-flex-col;
  @apply tw-justify-between;
  @apply tw-px-[16px];
  @apply tw-py-[6px];
}

.hot-item-title-container {
  @apply tw-font-bold;
  @apply tw-text-black;
}

.hot-item-subtitle-container {
  @apply tw-text-[#999];
}
</style>