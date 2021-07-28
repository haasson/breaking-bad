<template>
   <v-card>
      <h5 class="text-h5 my-2">Quotes</h5>
      <v-card-text v-if="payload.length">
         <div v-for="(quote, idx) in payload" :key="quote.quote_id">
            {{idx + 1}}. {{quote.quote}}
         </div>
      </v-card-text>
      <v-card-text v-else>
         Didn't say any interesting phrase
      </v-card-text>
   </v-card>

</template>

<script>
export default {
   name: "QuotesList",
   props: {
      payload: Array
   }
}
</script>