<template>
   <v-card class="d-flex flex-column ma-5" width="400" @click="showFullEpisode" v-click-outside="onClickOutside">
      <v-card-text>
         <span>Episode {{data.episode}}</span>
         <h4 class="text-h4 text--primary my-3">
            {{data.title}}
         </h4>
         <div class="text--primary">
            Released: {{data.air_date}}
         </div>
      </v-card-text>
      <v-card-actions class="mt-auto">
         <v-btn text @click.stop="reveal = true" >
            Characters ({{ data.characters.length }})
         </v-btn>
      </v-card-actions>

      <v-expand-transition>
         <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal d-flex flex-column" height="100%">
            <div class="pt-2 px-3">
               <v-chip
                   small
                   v-for="char in data.characters"
                   :key="char"
                   class="ma-1"
                   :data-name="char"
                   @click.stop="showCharacterPage(char)"
               >
                  {{char}}
               </v-chip>
            </div>
            <v-card-actions class="pt-0 mt-auto">
               <v-btn
                   text
                   color="teal accent-4"
                   @click.stop="reveal = false"
               >
                  Close
               </v-btn>
            </v-card-actions>
         </v-card>
      </v-expand-transition>
   </v-card>
</template>

<script>
export default {
   name: "EpisodeCard",
   props: {
      data: Object
   },
   data: () => ({
      reveal: false,
   }),
   methods: {
      onClickOutside() {
         this.reveal ? this.reveal = false : null;
      },
      showFullEpisode() {
         this.$router.history.push(`/episodes/${this.data.episode_id}`);
      },
      showCharacterPage(char) {
         this.$router.history.push(`/character/${char}`);
      }
   }
}
</script>

<style scoped>
.v-card--reveal {
   bottom: 0;
   opacity: 1 !important;
   position: absolute;
   width: 100%;
}
</style>