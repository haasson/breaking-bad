<template>
   <v-tabs v-if="showSeasonsTabs" background-color="transparent" color="basil">
      <v-tab v-for="num in seasonsCount" :key="num" :to="`/seasons/${num}`">
         Season {{ num }}
      </v-tab>
   </v-tabs>
</template>

<script>
import appConfig from "@/config/appConfig";

export default {
   name: "SeasonsTabs",
   data: () => ({
      seasonsCount: appConfig.seasonsCount
   }),
   computed: {
      showSeasonsTabs() {
         return this.$store.getters.showSeasonsTabs;
      }
   },
}
</script>

<style scoped>

</style>