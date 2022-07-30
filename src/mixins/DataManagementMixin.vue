<script>
import {
  SUCCESS_RESPONSE,
  CREATED_RESPONSE,
  MODULE_TYPE_MODULE_ITEMS,
  MODULE_TYPE_CAROUSEL,
} from "@/constants";
import axios from "axios";

export default {
  methods: {
    async onOpenCarouselItem(item) {
      const videoId = item.id;
      let videoName = item.title.replaceAll(" ", "-").replaceAll(":", "");

      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${videoId}-${videoName}.json?ids=${videoId}-${videoName}`,
        {
          useCredentials: true,
        }
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        const videoList = pageProps.data.videoList;

        let episodeName;
        let episodeId;

        const firstVideoItem = videoList[0];
        episodeName = firstVideoItem.title
          .replaceAll(" ", "-")
          .replaceAll(":", "");
        episodeId = firstVideoItem.vid;

        this.$router.push({
          name: "MovieDetail",
          params: {
            videoId,
            videoName,
            episodeId,
            episodeName,
          },
        });
      }
    },
    async onOpenAlbumItem(item) {
      const videoId = item.isRecommendedItem ? item.cover_id : item.id;
      let videoName = item.title.replaceAll(" ", "-").replaceAll(":", "");

      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${videoId}-${videoName}.json?ids=${videoId}-${videoName}`,
        {
          useCredentials: true,
        }
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        const videoList = pageProps.data.videoList;

        let episodeName;
        let episodeId;

        const firstVideoItem = videoList[0];
        episodeName = firstVideoItem.title
          .replaceAll(" ", "-")
          .replaceAll(":", "");
        episodeId = firstVideoItem.vid;

        this.$router.push({
          name: "MovieDetail",
          params: {
            videoId,
            videoName,
            episodeId,
            episodeName,
          },
        });
      }
    },
    async onSelectEpisodeItem(item) {
      const videoId = this.selectedVideoId;
      let videoName = this.selectedVideoTitle;

      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${videoId}-${videoName}.json?ids=${videoId}-${videoName}`,
        {
          useCredentials: true,
        }
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        const videoList = pageProps.data.videoList;

        const selectedVideoItem = videoList.find(
          (video) => video.vid === item.vid
        );

        let episodeName;
        let episodeId;

        episodeName = selectedVideoItem.title
          .replaceAll(" ", "-")
          .replaceAll(":", "");

        episodeId = selectedVideoItem.vid;

        this.$router.push({
          name: "MovieDetail",
          params: {
            videoId,
            videoName,
            episodeId,
            episodeName,
          },
        });
      }
    },
    async onOpenHotItem(item) {
      const videoId = item.cover_id;
      let videoName = item.title.replaceAll(" ", "-").replaceAll(":", "");

      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${videoId}-${videoName}.json?ids=${videoId}-${videoName}`,
        {
          useCredentials: true,
        }
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        const videoList = pageProps.data.videoList;

        let episodeName;
        let episodeId;

        const firstVideoItem = videoList[0];
        episodeName = firstVideoItem.title
          .replaceAll(" ", "-")
          .replaceAll(":", "");
        episodeId = firstVideoItem.vid;

        this.$router.push({
          name: "MovieDetail",
          params: {
            videoId,
            videoName,
            episodeId,
            episodeName,
          },
        });
      }
    },
    async onLoadVideoDetailData() {
      const response = await axios.get(
        `https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/${this.selectedVideoId}-${this.selectedVideoTitle}.json?ids=${this.selectedVideoId}-${this.selectedVideoTitle}`,
        {
          useCredentials: true,
        }
      );

      if (response.status === SUCCESS_RESPONSE) {
        const pageProps = response.data.pageProps;

        response.data.pageProps.data = JSON.parse(pageProps.data);

        console.log(
          "response.data.pageProps.data : ",
          response.data.pageProps.data
        );

        this.channelsList = pageProps.channels;
        this.languageConfigList = pageProps.langConfig;
        this.hotItems = pageProps.hot;
        this.recommendationList = pageProps.rec;

        this.detailedVideoItemInfo = pageProps.data.coverInfo;
        this.episodesList = pageProps.data.videoList;
      }
    },
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
    onSelectLanguage(item) {
      const configToUpdate = {
        langId: item.langId,
        langName: item.langName,
        langCode: item.langCode,
      };

      this.$store.commit("updateConfig", configToUpdate);
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
  },
};
</script>