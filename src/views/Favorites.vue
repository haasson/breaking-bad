<template>
   <div v-if="loading" class="align-self-center">
      <Loader />
   </div>
   <div v-else class="favorites" style="width: 100%">
      <h4 class="text-h4 my-3">Favorites</h4>
      <div v-if="favorites.length" class="avatars d-flex flex-wrap justify-space-around">
         <CharacterCard v-for="char in characters" :key="char.name" :profile="char" />
      </div>
      <div v-else>There are no favorite characters</div>
   </div>
</template>

<script>

import sectionName from "@/mixins/sectionName";
import Loader from "@/components/app/Loader";
import CharacterCard from "@/components/Characters/CharacterCard";

export default {
   name: "favorites",
   components: {CharacterCard, Loader},
   mixins: [sectionName],
   created() {
      if (this.favorites === null) {
         this.$store.dispatch(("getFavoritesList"))
      }
      if (!this.$store.getters.getAllCharacters.length) {
         this.$store.dispatch(("getAllCharacters"))
      }
   },
   computed: {
      loading() {
         return this.favorites === null
      },
      favorites() {
         return this.$store.getters.getFavorites
      },
      characters() {
         return this.$store.getters.getCharactersProfiles(this.favorites)
      },
   }
}
</script>
