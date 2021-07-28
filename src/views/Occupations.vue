<template>
   <div v-if="!fetched" class="align-self-center">
      <Loader/>
   </div>
   <div v-else class="favorites" style="width: 100%">
      <h4 class="text-h4 my-3">Occupations</h4>
      <v-card class="avatars d-flex flex-wrap justify-space-around">
         <v-card-text v-for="(persons, key) in occupations" :key="key">
            <b>{{ key }}</b> - {{ persons.join(", ") }}
         </v-card-text>
      </v-card>
   </div>
</template>

<script>
import Loader from "@/components/app/Loader";
import sectionName from "@/mixins/sectionName";

export default {
   name: "Occupations",
   components: {Loader},
   mixins: [sectionName],
   created() {
      this.$store.dispatch("getOccupationsList")
   },
   computed: {
      fetched() {
         return Object.keys(this.occupations).length
      },
      occupations() {
         return this.$store.getters.getOccupationsList
      }
   }
}
</script>