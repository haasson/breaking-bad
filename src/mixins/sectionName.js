export default {
   mounted() {
      this.changeSection();
   },
   methods: {
      changeSection() {
         const section = this.$options.name;
         const showSeasonsTabs = section === "Seasons" || section === "EpisodeFull"
         this.$store.dispatch("changeAppSection", {showSeasonsTabs, title: this.$route.name});
      },
   },
}