import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
   {
      path: "/",
      exact:true,
      name: "Home",
      component: () => import('../views/Home.vue')
   },
   {
      path: "/seasons/:id",
      name: "Episodes",
      component: () => import('../views/SeasonsList.vue')
   },
   {
      path: "/episodes/:id",
      name: "Episode",
      component: () => import('../views/EpisodeFull.vue')
   },
   {
      path: "/favorites",
      name: "Favorites",
      component: () => import('../views/Favorites.vue')
   },
   {
      path: "/character/:name",
      name: "Character",
      component: () => import('../views/Character.vue')
   },
   {
      path: "/occupations",
      name: "Occupations",
      component: () => import('../views/Occupations.vue')
   },
   {
      path: "/top-killers",
      name: "TopKillers",
      component: () => import('../views/TopKillers.vue')
   },
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
