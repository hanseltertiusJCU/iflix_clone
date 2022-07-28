<template>
  <span class="video-tag-container" :style="{ 'background-color': `${color}` }">
    <span class="video-tag-container-text">{{ text }}</span>
    <span
      class="video-tag-container-decoration"
      :style="{ 'background-color': `${color}` }"
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
  @apply tw-absolute;
  @apply tw--top-5;
  @apply tw--right-5;
  @apply tw-pl-[2px];
}

.video-tag-container-text {
  @apply tw-text-white;
}

.video-tag-container-decoration {
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