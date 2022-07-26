import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/common/routes/HomeComponent'
import MovieList from '@/components/common/routes/MovieList'
import MovieDetail from '@/components/common/routes/MovieDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path: '/channel/:channelId',
      name: 'MovieList',
      component: MovieList,
    },
    {
      path: '/play/:videoId/:videoName/:episodeId/:episodeName',
      name: 'MovieDetail',
      component: MovieDetail,
      props: true
    },
  ]
})
