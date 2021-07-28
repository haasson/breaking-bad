<template>
   <v-card :to="`/character/${profile.name}`">
      <v-avatar
          class="profile ma-3"
          size="200"
          height="290"
          tile
      >
         <v-img lazy-src="../../assets/empty-avatar.jpg" :src="profile.img">
            <div class="d-flex flex-column justify-end" style="width: 100%">
               <v-card-title class="justify-center" dark>{{profile.name}}</v-card-title>
            </div>

         </v-img>
      </v-avatar>
   </v-card>
</template>

<script>
export default {
name: "CharacterCard",
   props: {
      profile: Object
   }
}
</script>