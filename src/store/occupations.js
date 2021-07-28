export default {
   state: {
      occupations: []
   },
   getters: {
      getOccupationsList: state => state.occupations
   },
   actions: {
      async getOccupationsList({getters, dispatch, commit}) {
         const occupations = {}
         let characters = getters.getAllCharacters;
         if (!characters.length) {
            await dispatch("getAllCharacters")
         }
         characters = getters.getAllCharacters;
         characters.forEach(char => {
            char.occupation.forEach(occ => {
               occupations[occ] = occupations[occ] || []
               occupations[occ].push(char.name)
            })
         })
         commit("setOccupations", occupations)
      }
   },
   mutations: {
      setOccupations(state, occupations) {
         state.occupations = occupations
      }
   }
}