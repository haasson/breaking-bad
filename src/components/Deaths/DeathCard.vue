<template>
   <div class="d-flex" style="width: 50%">
      <v-avatar
          class="profile ma-3"
          size="100"
          height="145"
          tile
      >
         <v-img
             loading
             lazy-src="../../assets/empty-avatar.jpg"
             :src="profile.img"
         ></v-img>

      </v-avatar>
      <v-card-text class="name" dark>
         <div><b>Name:</b> {{ profile.death }}</div>
         <div><b>Dead cause:</b> {{ profile.cause }}</div>
         <div><b>Killed by:</b> {{ profile.responsible }}</div>
         <div><b>Said before death:</b> {{ profile.last_words }}</div>
      </v-card-text>
   </div>
</template>

<script>
export default {
   name: "DeathCard",
   props: {
      profile: Object
   }
}
</script>

<style scoped>

</style>