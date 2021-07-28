<template>
   <div v-if="!fetched" class="align-self-center">
      <Loader />
   </div>
   <div v-else style="width: 100%">
      <a class="text-h6" @click="$router.back()">Back</a>
      <h4 class="text-h4 my-3">Episode {{data.episode}} - {{data.title}}</h4>

      <v-card v-if="deaths.length" class="d-flex mt-5">
         <v-card-text>
            <h5 class="text-h5 mb-3">Deaths</h5>
            <div class="avatars d-flex flex-wrap">
               <DeathCard v-for="death in deaths" :key="death.name" :profile="death"/>
            </div>
         </v-card-text>
      </v-card>

      <v-card class="d-flex mt-5">
         <v-card-text>
            <h5 class="text-h5 mb-3">Characters</h5>
            <div class="avatars d-flex flex-wrap justify-space-around">
               <CharacterCard v-for="char in characters" :key="char.name" :profile="char" />
            </div>
         </v-card-text>
      </v-card>
   </div>
</template>

<script>
import sectionName from "@/mixins/sectionName";
import Loader from "@/components/app/Loader";
import CharacterCard from "@/components/Characters/CharacterCard";
import DeathCard from "@/components/Deaths/DeathCard";

export default {
   name: "EpisodeFull",
   components: {DeathCard, CharacterCard, Loader},
   mixins: [sectionName],

   created() {
      if (!this.$store.getters.getAllEpisodes.length) {
         this.$store.dispatch(("getAllEpisodes"))
      }
      if (!this.$store.getters.getAllCharacters.length) {
         this.$store.dispatch(("getAllCharacters"))
      }
      if (!this.$store.getters.getAllDeaths.length) {
         this.$store.dispatch(("getAllDeaths"))
      }
   },
   computed: {
      fetched() {
         return this.characters.length
      },
      data() {
         return this.$store.getters.getEpisodeById(this.$route.params.id) || {}
      },
      characters() {
         const names = this.data.characters || [];
         return this.$store.getters.getCharactersProfiles(names)
      },
      deaths() {
         const deaths = this.$store.getters.getDeathsByEpisode(this.data.id) || []
         const names = deaths.map(death => death.death)
         const chars = this.$store.getters.getCharactersProfiles(names)
         return deaths.map(death=> {
            const char = chars.find(char => char.name === death.death)
            return {...death, img: char?.img}
         })
      }
   },
}
</script>
