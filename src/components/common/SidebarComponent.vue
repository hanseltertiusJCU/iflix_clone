<template>
  <div class="sidebar-navigation-container">
    <v-icon
      @click="openBrowserUrl('https://www.facebook.com/iflixID/')"
      class="sidebar-navigation-item-container"
    >
      mdi-message-outline
    </v-icon>
    <v-menu open-on-hover left offset-x :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          class="sidebar-navigation-item-container"
        >
          mdi-cellphone-arrow-down-variant
        </v-icon>
      </template>

      <v-card width="150">
        <v-card-text>
          <span class="tw-block tw-text-center">
            Scan QR code to download App Now !
          </span>
        </v-card-text>
        <v-card-text>
          <img src="@/assets/img/qr-code.png" alt="" class="qr-code-image" />
        </v-card-text>
      </v-card>
    </v-menu>

    <v-icon @click="scrollToTop" class="sidebar-navigation-item-container"
      >mdi-chevron-up</v-icon
    >
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  methods: {
    scrollToTop() {
      this.$emit("scroll-to-top");
    },
    openBrowserUrl(url) {
      this.$emit("open-browser-url", url);
    },
  },
};
</script>

<style lang="postcss">
.sidebar-navigation-container {
  @apply tw-absolute;
  @apply tw-fixed;
  @apply tw-right-0;
  @apply tw-bottom-[15%];
  @apply tw-flex;
  @apply tw-flex-col;
  @apply tw-bg-white;
  @apply tw-shadow-md;
  @apply tw-z-20;
}

.sidebar-navigation-item-container {
  @apply tw-p-4;
}

.sidebar-navigation-item-container:hover {
  cursor: pointer;
  color: #ff4a22;
}
</style>