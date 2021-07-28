<template>
   <div v-if="!fetched" class="align-self-center">
      <Loader/>
   </div>
   <div v-else style="width: 100%">
      <a class="text-h6" @click="$router.back()">Back</a>

      <v-card class="d-flex align-start mt-5">
         <img :src="profile.img" alt="" width="300px" class="ma-3">
         <v-card-text>
            <div class="d-flex justify-space-between align-center">
               <h4 class="text-h4">{{ profile.name }}</h4>
               <v-icon @click="toggleFavorite">{{ isFavorite ? 'mdi-star' : 'mdi-star-outline' }}</v-icon>
            </div>

            <v-card-subtitle class>
               <div><b>Birthday:</b> {{ profile.birthday }}</div>
               <div><b>Nickname:</b> {{ profile.nickname }}</div>
               <div><b>Status:</b> {{ profile.status }}</div>
            </v-card-subtitle>
            <v-divider></v-divider>

            <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                grow
            >
               <v-tab v-for="item in tabs" :key="item.name">
                  {{ item.name }}
               </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
               <v-tab-item v-for="item in tabs" :key="item.name">
                  <component :is="item.component" :payload="item.payload"/>
               </v-tab-item>
            </v-tabs-items>
         </v-card-text>
      </v-card>
   </div>
</template>

<script>
import {getQuotesByName} from "@/api/breaking-bad";
import Loader from "@/components/app/Loader";
import QuotesList from "@/components/Characters/QuotesList";
import DeathsList from "@/components/Deaths/DeathsList";
import Timeline from "@/components/Characters/Timeline";

export default {
   name: "Character",
   components: {QuotesList, Loader},
   data() {
      return {
         profile: {},
         tab: null,
         tabs: [],
      }
   },
   async created() {
      const getters = this.$store.getters
      if (!getters.getAllEpisodes.length) {
         await this.$store.dispatch(("getAllEpisodes"))
      }
      if (!getters.getAllCharacters.length) {
         await this.$store.dispatch(("getAllCharacters"))
      }
      if (!getters.getAllDeaths.length) {
         await this.$store.dispatch(("getAllDeaths"))
      }
      if (!getters.getFavorites) {
         await this.$store.dispatch(("getFavoritesList"))
      }
      this.profile = getters.getCharactersProfileByName(this.$route.params.name)

      const name = this.profile.name;
      const quotes = await getQuotesByName(name)
      const episodes = getters.getEpisodesByCharacter(name)
      const deaths = getters.getDeathsByCharacter(name)
      episodes.forEach(ep => {
         ep.deaths_in_episode = deaths.filter(death => death.id === ep.id && death.responsible.indexOf(name) !== -1)
      })
      this.profile = {...this.profile, quotes, episodes, deaths}

      this.tabs = [
         {name: "Quotes", component: QuotesList, payload: quotes},
         {name: "Deaths", component: DeathsList, payload: deaths},
         {name: "Timeline", component: Timeline, payload: {episodes, status: this.profile.status}}
      ]
   },
   methods: {
      toggleFavorite() {
         const actionName = this.isFavorite ? "removeFavorite" : "addFavorite"
         this.$store.dispatch(actionName, this.profile.name)
      }
   },
   computed: {
      fetched() {
         return Object.keys(this.profile).length
      },
      isFavorite() {
         return this.$store.getters.isCharacterFavorite(this.profile.name)
      }
   }

}
</script>