<template>
  <div>
    <div v-if="isSelected">
      <div
        @click="onSelectEpisodeNavigation(episodeItem)"
        class="selected-episode-container"
      >
        <span class="episode-text">{{ episodeText }}</span>
        <span v-if="episodeItem.imgtag_ver.length > 0">
          <VideoTag
            :text="episodeItem.imgtag_ver[0].text"
            :color="episodeItem.imgtag_ver[0].color"
          />
        </span>
      </div>
    </div>
    <div v-else>
      <div
        @click="onSelectEpisodeNavigation(episodeItem)"
        class="episode-container"
      >
        <span class="episode-text">{{ episodeText }}</span>
        <span v-if="episodeItem.imgtag_ver.length > 0">
          <VideoTag
            :text="episodeItem.imgtag_ver[0].text"
            :color="`${episodeItem.imgtag_ver[0].color}`"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import VideoTag from "@/components/common/VideoTag.vue";

export default {
  name: "EpisodeItem",
  components: { VideoTag },
  props: ["episodeItem", "episodeText", "isSelected"],
  methods: {
    onSelectEpisodeNavigation(item) {
      this.$emit("on-load-episode", item);
    },
  },
};
</script>

<style lang="postcss">
.episode-container {
  @apply tw-inline-block;
  @apply tw-relative;
  @apply tw-px-6;
  @apply tw-py-2;
}

.selected-episode-container {
  @apply tw-inline-block;
  @apply tw-relative;
  @apply tw-px-6;
  @apply tw-py-2;
  @apply tw-border-solid tw-border-2 tw-border-[#979797];
  @apply tw-bg-[hsla(0,0%,58.8%,.2)];
}

.episode-container:hover,
.selected-episode-container:hover {
  @apply tw-bg-zinc-400;
  cursor: pointer;
}

.episode-container .episode-text {
  @apply tw-text-[#ccc];
}

.selected-episode-container .episode-text {
  @apply tw-text-[#ff4a22];
}
</style>