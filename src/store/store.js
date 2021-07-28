import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import app from "@/store/app";
import series from "@/store/series";
import episodes from "@/store/episodes";
import characters from "@/store/characters";
import deaths from "@/store/deaths";
import favorites from "@/store/favorites";
import occupations from "@/store/occupations";

export default new Vuex.Store({
   modules: {
      app, series, episodes, characters, deaths, favorites, occupations
   },
});
