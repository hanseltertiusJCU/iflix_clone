<template>
  <div class="album-master-item-container">
    <div class="album-navigation-bar-container">
      <div class="album-navigation-bar-title-text">
        {{ albumTitleText }}
      </div>

      <div
        class="album-navigation-bar-navigation-page-container"
        v-if="isAbleToPaginate"
      >
        <div
          class="change-page-navigation-button-container"
          @click="goToPreviousPage"
        >
          <v-icon
            :color="
              isPreviousPageNavigationDisabled
                ? 'rgb(204, 204, 204)'
                : 'rgb(106, 110, 126)'
            "
            >mdi-chevron-left</v-icon
          >
        </div>
        <div class="album-navigation-bar-page-number-text">
          {{ currentPage }}/{{ lastPage }}
        </div>
        <div
          class="change-page-navigation-button-container"
          @click="goToNextPage"
        >
          <v-icon
            :color="
              isNextPageNavigationDisabled
                ? 'rgb(204, 204, 204)'
                : 'rgb(106, 110, 126)'
            "
            >mdi-chevron-right</v-icon
          >
        </div>
      </div>
    </div>

    <div class="album-item-list-container" :style="gridStyle">
      <div
        v-for="(item, index) in displayedItems"
        :key="`id-${item.id}-in-displayed-items-${index}`"
      >
        <AlbumItem
          :albumImageUrl="getAlbumImageUrl(item)"
          :albumLabels="getAlbumLabel(item)"
          :albumDataItem="item"
          :albumTitle="item.title"
          :albumSubtitle="getSubtitleText(item)"
          @on-open-album-item="onOpenAlbumItem(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { FIRST_PAGE } from "@/constants";
import AlbumItem from "@/components/common/AlbumItem.vue";

export default {
  props: {
    gridColumnsPerItem: {
      type: Number,
      required: true,
    },
    gridRowsPerItem: {
      type: Number,
      required: true,
    },
    isRecommendedItem: {
      type: Boolean,
      required: true,
    },
    albumTitleText: {
      type: String,
      required: true,
    },
    albumDataItems: {
      type: Array,
      required: true,
    },
  },
  components: { AlbumItem },
  name: "AlbumMasterItem",
  computed: {
    isPreviousPageNavigationDisabled() {
      return this.currentPage === FIRST_PAGE;
    },
    isNextPageNavigationDisabled() {
      return this.currentPage === this.lastPage;
    },
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.gridColumnsPerItem}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${this.gridRowsPerItem}, minmax(300px, 1fr))`,
      };
    },
  },
  data() {
    return {
      currentPage: 1,
      lastPage: 1,
      isAbleToPaginate: false,
      displayedItems: [],
    };
  },
  mounted() {
    this.setAbleToPaginate();
    this.setLastPage();
    this.getDisplayedItems(this.currentPage);
  },
  methods: {
    setAbleToPaginate() {
      this.isAbleToPaginate = !this.isRecommendedItem;
    },
    setLastPage() {
      const arrayItemLength = this.albumDataItems.length;
      const itemsPerPage = this.gridColumnsPerItem * this.gridRowsPerItem;

      let calculatedLastPage = arrayItemLength / itemsPerPage;
      calculatedLastPage = Math.ceil(calculatedLastPage);

      this.lastPage = calculatedLastPage;
    },
    getDisplayedItems(currentPage) {
      const lowestPage = currentPage - 1;
      const highestPage = currentPage;

      const itemsPerPage = this.gridColumnsPerItem * this.gridRowsPerItem;

      const lowestIndexItem = lowestPage * itemsPerPage;

      const albumItems = this.albumDataItems;

      const highestItemFromCurrentPage = highestPage * itemsPerPage;
      const highestItemFromArray = albumItems.length;
      const highestItemToBeDisplayed = Math.min(
        highestItemFromCurrentPage,
        highestItemFromArray
      );

      const itemsToDisplay = albumItems.slice(
        lowestIndexItem,
        highestItemToBeDisplayed
      );

      this.displayedItems = itemsToDisplay;
    },
    getSubtitleText(item) {
      return this.isRecommendedItem ? item.second_title : item.subtitle;
    },
    getAlbumImageUrl(item) {
      return this.isRecommendedItem ? item.new_pic_hz : item.pic;
    },
    getAlbumLabel(item) {
      return this.isRecommendedItem ? item.imgtag_ver : item.labels;
    },
    goToPreviousPage() {
      if (this.currentPage === FIRST_PAGE) {
        return;
      }

      this.currentPage -= 1;
      this.getDisplayedItems(this.currentPage);
    },
    goToNextPage() {
      if (this.currentPage === this.lastPage) {
        return;
      }

      this.currentPage += 1;
      this.getDisplayedItems(this.currentPage);
    },
    onOpenAlbumItem(item) {
      const selectedItem = {
        ...item,
        isRecommendedItem: this.isRecommendedItem,
      };
      this.$emit("on-open-album-item", selectedItem);
    },
  },
};
</script>

<style lang="postcss">
.album-master-item-container {
  @apply tw-mb-4;
}

.album-navigation-bar-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-justify-between;
  @apply tw-items-center;
  @apply tw-mb-5;
}

.album-navigation-bar-title-text {
  @apply tw-text-[32px];
  @apply tw-font-bold;
}

.album-navigation-bar-navigation-page-container {
  @apply tw-flex;
  @apply tw-flex-row;
}

.album-navigation-bar-page-number-text {
  @apply tw-mx-[15px];
  @apply tw-text-[#6A6E7E];
}

.change-page-navigation-button-container:hover {
  cursor: pointer;
}

.album-item-list-container {
  @apply tw-grid;
  @apply tw-gap-4;
}
</style>