import {getAllDeaths} from "@/api/breaking-bad";

export default  {
   state: {
      deaths: [],
      killers: []
   },
   getters: {
      getAllDeaths: (state) => state.deaths,
      getDeathsByEpisode: state => id => state.deaths.filter(death => death.id === id),
      getDeathsByCharacter: (state) => (name) => state.deaths.filter(death => death.responsible.indexOf(name) !== -1).sort((a, b) => a.death_id > b.death_id ? 1 : -1),
      getKillersList: state => state.killers
   },
   actions: {
      async getAllDeaths({ commit }) {
         const deaths = await getAllDeaths();
         const formattedDeaths = deaths.map(death => ({...death, id: `s${death.season}e${death.episode}`}))
         commit("setDeaths", formattedDeaths);
      },
      async getKillersList({state, getters, commit, dispatch}) {
         if (!state.deaths.length) {
            await dispatch("getAllDeaths")
         }
         const killers = {}
         getters.getAllDeaths.forEach(death => {
            killers[death.responsible] = killers[death.responsible] || 0 + death.number_of_deaths
         })
         const topKillers = Object.entries(killers)
            .sort(([,a],[,b]) => b-a)
            .slice(0, 5)

         commit("setKillers", topKillers)
      }
   },
   mutations: {
      setDeaths(state, deaths) {
         state.deaths = deaths;
      },
      setKillers(state, killers) {
         state.killers = killers
      }
   }
}