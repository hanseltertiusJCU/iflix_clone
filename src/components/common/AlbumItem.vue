<template>
  <div class="album-item-container">
    <div
      class="album-item-hyperlink-container"
      @click="onOpenAlbumItem(albumDataItem)"
    >
      <div class="image-on-album-item-container">
        <img class="image-album-item" :src="albumDataItem.pic" />
        <div class="album-item-image-info-container">
          <ImageTag
            :text="albumDataItem.labels[0] ? albumDataItem.labels[0].text : ''"
            :color="
              albumDataItem.labels[0]
                ? albumDataItem.labels[0].color
                : 'transparent'
            "
          />

          <span class="tw-text-right" v-if="albumDataItem.labels[1]">{{
            albumDataItem.labels[1].text
          }}</span>
        </div>
      </div>

      <div class="album-item-title-container">{{ albumTitle }}</div>
    </div>

    <div class="album-item-subtitle-container">
      {{ albumSubtitle }}
    </div>
  </div>
</template>

<script>
import ImageTag from "@/components/common/ImageTag.vue";

export default {
  name: "AlbumItem",
  components: {
    ImageTag,
  },
  props: {
    albumDataItem: {
      type: Object,
      required: true,
    },
    albumTitle: {
      type: String,
      default: "",
    },
    albumSubtitle: {
      type: String,
      default: "",
    },
  },
  name: "AlbumItem",
  methods: {
    onOpenAlbumItem(item) {
      this.$emit("on-open-album-item", item);
    },
  },
};
</script>

<style lang="postcss">
.album-item-container {
  @apply tw-rounded;
}

.image-on-album-item-container {
  @apply tw-rounded;
  @apply tw-mb-1;
  @apply tw-relative;
}

.image-album-item {
  @apply tw-rounded;
  @apply tw-w-full;
  @apply tw-h-[85%];
  @apply tw-object-cover;
}

.album-item-hyperlink-container:hover {
  cursor: pointer;
}

.image-album-item:hover {
  @apply tw-shadow-md;
}

.album-item-image-info-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-w-full;
  @apply tw-justify-between;
  @apply tw-items-center;
  @apply tw-px-2;
  @apply tw-pb-1;
  @apply tw-text-white;
  @apply tw-absolute;
  @apply tw-bottom-2;
  @apply tw-left-0;
}

.album-item-title-container {
  @apply tw-text-black;
  @apply tw-font-bold;
  @apply tw-truncate;
}

.album-item-subtitle-container {
  @apply tw-text-[#999];
  @apply tw-truncate;
}
</style>