export default  {
   state: {
      loading: true,
      title: "Episodes",
      showSeasonsTabs: true,
   },
   getters: {
      isLoading: (state) => state.loading,
      getTitle: (state) => state.title,
      showSeasonsTabs: (state) => state.showSeasonsTabs,
   },
   actions: {
      changeAppSection({ commit, state }, section) {
         commit("setAppSection", section);
      },
   },
   mutations: {
      toggleLoading(state, mode) {
         state.loading = mode;
      },
      setAppSection(state, payload) {
         state.title = payload.title;
         state.showSeasonsTabs = payload.showSeasonsTabs;
      },
   }
}