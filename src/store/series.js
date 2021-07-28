import {getSeriesInfo} from "@/api/omdb";

export default {
   state: {
      seriesInfo: {},
   },
   getters: {
      getSeriesInfo: (state) => state.seriesInfo,
   },
   actions: {
      async getSeriesInfo({commit}) {
         const seriesInfo = await getSeriesInfo();
         commit("setSeriesInfo", seriesInfo);
      },

   },
   mutations: {
      setSeriesInfo(state, info) {
         state.seriesInfo = info;
      },
   }
}
