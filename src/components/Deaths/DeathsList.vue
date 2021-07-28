<template>
   <v-card>
      <h5 class="text-h5 my-2">Deaths</h5>
      <v-card-text v-if="payload.length">
         <div v-for="(death, idx) in payload" :key="death.death_id">
            {{ idx + 1 }}. {{ death.death }}
         </div>
      </v-card-text>
      <v-card-text v-else>
         Didn't kill anybody
      </v-card-text>
   </v-card>
</template>

<script>
export default {
   name: "DeathsList",
   props: {
      payload: Array
   }
}
</script>

<style scoped>

</style>