import {getAllEpisodes} from "@/api/breaking-bad";

export default {
   state: {
      episodes: [],
   },
   getters: {
      getAllEpisodes: (state) => state.episodes,
      getEpisodesBySeason: (state) => (season) => state.episodes.filter(episode => +episode.season === +season),
      getEpisodesByCharacter: (state) => (name) => state.episodes.filter(episode => episode.characters.includes(name)),
      getEpisodeById: state => id => state.episodes.find(episode => +episode.episode_id === +id),
   },
   actions: {
      async getAllEpisodes({ commit }) {
         const episodes = await getAllEpisodes();
         const formattedEpisodes = episodes.map(ep => ({...ep, id: `s${ep.season}e${ep.episode}`}))
         commit("setEpisodes", formattedEpisodes);
      },

   },
   mutations: {
      setEpisodes(state, episodes) {
         state.episodes = episodes;
      },
   }
}