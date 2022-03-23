<template>
  <footer>&copy; {{ currentYear }}, todos os direitos reservados</footer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MainFooter",
  props: {
    name: String,
  },
  data() {
    return {
      currentYear: "",
    };
  },
  created() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  },
});
</script>

<style scoped>
footer {
  @apply text-center mt-[10rem] mb-[2rem] text-lg;
}
</style>
