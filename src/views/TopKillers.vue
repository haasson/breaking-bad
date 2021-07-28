<template>
   <div v-if="!fetched" class="align-self-center">
      <Loader/>
   </div>
   <div v-else class="favorites" style="width: 100%">
      <h4 class="text-h4 my-3">Top Killers</h4>
      <v-card class="d-flex flex-wrap justify-space-around">
         <v-card-text v-for="(killer, idx) in killers" :key="idx">
            {{idx + 1}} - {{killer[0]}} ({{killer[1]}} deaths)
         </v-card-text>
      </v-card>
   </div>
</template>

<script>
import sectionName from "@/mixins/sectionName";
import Loader from "@/components/app/Loader";

export default {
   name: "TopKillers",
   components: {Loader},
   mixins: [sectionName],
   created() {
      this.$store.dispatch("getKillersList")
   },
   computed: {
      fetched() {
         return this.killers.length
      },
      killers() {
         return this.$store.getters.getKillersList
      }
   }
}
</script>