<template>
  <div
    :class="
      text !== ''
        ? 'image-tag-label-info-container'
        : 'image-tag-label-info-container-transparent'
    "
  >
    <div
      class="image-tag-label-info-decoration"
      :style="{ 'background-color': `${color}` }"
    ></div>
    <!-- TODO : we need to use the attribute text from the first item in "labels" attribute (only if available) -->
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "ImageTag",
  props: ["text", "color"],
};
</script>

<style lang="postcss">
.image-tag-label-info-container {
  @apply tw-bg-[#071338];
  @apply tw-text-white;
  @apply tw-py-1;
  @apply tw-px-2;
  @apply tw-relative;
  @apply tw-rounded-tl;
}

.image-tag-label-info-container-transparent {
  @apply tw-bg-transparent;
}

.image-tag-label-info-decoration {
  @apply tw-w-3;
  @apply tw-absolute;
  @apply tw-top-0;
  @apply tw-bottom-0;
  @apply tw-left-0;
  @apply tw-rounded-tl;
  -webkit-clip-path: polygon(0 0, 100% 0, 0 100%);
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
</style>