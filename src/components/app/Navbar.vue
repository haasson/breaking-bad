<template>
   <div>
      <v-navigation-drawer app clipped fixed v-model="drawer" class="pt-15">
         <Menu />
      </v-navigation-drawer>
      <v-app-bar fixed clipped-left>
         <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title class="flex-shrink-0 mr-10">{{ title }}</v-toolbar-title>
         <v-divider vertical></v-divider>
         <SeasonsTabs />
      </v-app-bar>
   </div>
</template>
<script>
import SeasonsTabs from "@/components/app/SeasonsTabs";
import Menu from "@/components/app/Menu";
export default {
   components: {Menu, SeasonsTabs},
   data: () => ({
      drawer: null,
   }),
   computed: {
      title() {
         return this.$store.getters.getTitle;
      }
   },
};
</script>