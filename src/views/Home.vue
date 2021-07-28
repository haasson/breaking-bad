<template>
   <div v-if="!fetched" class="align-self-center">
      <Loader />
   </div>
   <div v-else style="width: 100%">
      <h4 class="text-h4 my-3">Main info</h4>
      <v-card class="d-flex mt-5">
         <img :src="info.Poster" alt="" width="300px">
         <v-card-text>
            <h4 class="text-h4">{{info.Title}}</h4>
            <v-card-subtitle class>
               <div><b>Genre:</b> {{info.Genre}}</div>
               <div><b>Country:</b> {{info.Country}}</div>
               <div><b>Rating IMDB:</b> {{info.imdbRating}} ({{info.imdbVotes}})</div>
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
               {{info.Plot}}
            </v-card-text>
         </v-card-text>
      </v-card>
   </div>
</template>

<script>

import sectionName from "@/mixins/sectionName";
import Loader from "@/components/app/Loader";

export default {
   name: "Home",
   components: {Loader},
   mixins: [sectionName],
   created() {
      if (!this.fetched) {
         this.$store.dispatch("getSeriesInfo")
      }
   },
   computed: {
      fetched() {
         return Object.keys(this.info).length
      },
      info() {
         return this.$store.getters.getSeriesInfo
      }
   },
};
</script>

