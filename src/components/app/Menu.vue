<template>
   <v-list dense>
      <v-list-item
          v-for="route in this.routes"
          :key="route.name"
          :to="route.path"
      >
         <v-list-item-action>
            <v-icon>{{ route.icon }}</v-icon>
         </v-list-item-action>
         <v-list-item-content>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
         </v-list-item-content>
      </v-list-item>
   </v-list>
</template>

<script>
export default {
name: "Menu",
   data: () => ({
      routes: []
   }),
   mounted() {
      this.routes = [
         { name: "Home" ,path: "/", icon: "mdi-home" },
         { name: "Episodes", path: "/seasons/1", icon: "mdi-movie-open" },
         { name: "Favorites", path: "/favorites", icon: "mdi-star" },
         { name: "Occupations", path: "/occupations", icon: "mdi-briefcase" },
         { name: "Top killers", path: "/top-killers", icon: "mdi-skull-crossbones" },
      ]
   },
}
</script>

<style scoped>

</style>