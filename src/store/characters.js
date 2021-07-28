import {getAllCharacters} from "@/api/breaking-bad";

export default  {
   state: {
      characters: [],
   },
   getters: {
      getAllCharacters: state => state.characters,
      getCharactersProfiles: state => names => state.characters.filter(char => names.includes(char.name)),
      getCharactersProfileByName: state => name => state.characters.find(char => char.name === name),
   },
   actions: {
      async getAllCharacters({ commit }) {
         const characters = await getAllCharacters();
         commit("setCharacters", characters);
      },
   },
   mutations: {
      setCharacters(state, characters) {
         state.characters = characters;
      },
   }
}