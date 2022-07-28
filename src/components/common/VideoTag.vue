<template>
  <span :class="`video-tag-container ${getBackgroundColorStyle()}`">
    <span class="video-tag-container-text">{{ text }}</span>
    <span
      :class="`video-tag-container-decoration ${getBackgroundColorStyle()}`"
    ></span>
  </span>
</template>

<script>
export default {
  name: "VideoTag",
  props: ["text", "color"],
  methods: {
    getBackgroundColorStyle() {
      return `tw-bg-[${this.color}]`;
    },
  },
};
</script>

<style lang="postcss">
.video-tag-container {
  @apply tw-bg-[#ff4a22];
  @apply tw-absolute;
  @apply tw--top-5;
  @apply tw--right-5;
  @apply tw-pl-[2px];
}

.video-tag-container-text {
  @apply tw-text-white;
}

.video-tag-container-decoration {
  @apply tw-bg-[#ff4a22];
  @apply tw-block;
  @apply tw-absolute;
  @apply tw--right-[8px];
  @apply tw-w-[8px];
  @apply tw-h-full;
  @apply tw-top-0;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 8px, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 8px, 0 100%);
}
</style>