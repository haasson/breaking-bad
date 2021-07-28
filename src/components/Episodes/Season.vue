<template>
   <div>
      <h4 class="text-h4 my-3">Season {{this.id}} ({{ episodes.length }} episodes)</h4>
      <div class="d-flex justify-center flex-wrap">
         <EpisodeCard v-for="episode in episodes" :key="episode.id" :data="episode" />
      </div>
   </div>
</template>

<script>
import EpisodeCard from "@/components/Episodes/EpisodeCard";
export default {
   components: {EpisodeCard},
   props: {
      id: String
   },
   computed: {
      episodes() {
         return this.$store.getters.getEpisodesBySeason(this.id);
      },
   },
};
</script>

<style>
</style>
