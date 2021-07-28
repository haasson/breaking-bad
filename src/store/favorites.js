export default {
   state: {
      favorites: []
   },
   getters: {
      getFavorites: (state) => state.favorites,
      isCharacterFavorite: state => name => state.favorites.includes(name)
   },
   actions: {
      getFavoritesList({commit}) {
         const favorites = JSON.parse(localStorage.getItem('favorites'))
         commit("setFavorites", favorites || [])
      },
      addFavorite({commit, state}, favorite) {
         commit("setFavorites", [...state.favorites, favorite])
      },
      removeFavorite({commit, state}, favorite) {
         commit("setFavorites", state.favorites.filter(fav => fav !== favorite))
      },
   },
   mutations: {
      setFavorites(state, favorites) {
         state.favorites = favorites
         localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
   },
}