<template>
   <v-app id="inspire">
      <Navbar />
      <v-main class="pt-15">
         <v-container fluid fill-height>
            <v-layout justify-center>
               <router-view></router-view>
            </v-layout>
         </v-container>
      </v-main>
      <v-footer app fixed>
         <span>&copy; 2021</span>
      </v-footer>
   </v-app>
</template>

<script>
import Navbar from "@/components/app/Navbar";

export default {
   name: "App",
   components: {
      Navbar,
   }

};
</script>
<style>
</style>
