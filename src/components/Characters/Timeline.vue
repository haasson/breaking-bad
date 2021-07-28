<template>
   <v-card>
      <h5 class="text-h5 my-2">Timeline</h5>
      <v-timeline dense>
         <v-timeline-item color="green" icon="mdi-baby-carriage">Birthday</v-timeline-item>
         <v-timeline-item v-for="episode in timeline" :key="episode.id" :icon="episode.icon" :color="episode.color">
            s{{ episode.season }}e{{ episode.episode }} - {{ episode.title }}
            <span v-if="episode.wasDeaths">
               (killed {{episode.killed}} in this episode)
            </span>
         </v-timeline-item>
         <v-timeline-item>Status: {{payload.status}}</v-timeline-item>
      </v-timeline>
   </v-card>
</template>

<script>
export default {
   name: "Timeline",
   props: {payload: Object},
   data() {
      return {
         timeline: []
      }
   },
   created() {
      this.timeline = this.payload.episodes.map(episode => {
         const wasDeaths = !!episode.deaths_in_episode.length
         return {
            ...episode,
            wasDeaths,
            icon: wasDeaths ? 'mdi-skull-crossbones' : 'mdi-filmstrip',
            color: wasDeaths ? 'red' : 'purple',
            killed: episode.deaths_in_episode.map(death => death.death).join(", ")
         }
      })
   }
}
</script>

<style scoped>
.v-timeline-item {
   align-items: center;
}
</style>