<template>
   <div v-if="!fetched" class="align-self-center">
      <Loader />
   </div>
   <Season v-else :id="$route.params.id" />
</template>

<script>
import Season from "@/components/Episodes/Season";
import appConfig from "@/config/appConfig";
import sectionName from "@/mixins/sectionName";
import Loader from "@/components/app/Loader";

export default {
   name: "Seasons",
   components: {
      Loader,
      Season,
   },
   mixins: [sectionName],
   data() {
      return {
         seasonsCount: appConfig.seasonsCount,
      };
   },
   created() {
      if (!this.fetched) {
         this.$store.dispatch("getAllEpisodes")
      }
   },
   computed: {
      episodes() {
         return this.$store.getters.getAllEpisodes;
      },
      fetched() {
         return this.episodes.length
      },
   },
};
</script>

