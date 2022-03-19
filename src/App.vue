<template>
  <div id="app">
    <MainHeader name="<maríliacâmara />" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainHeader from "@/components/Header.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    MainHeader,
  },
});
</script>
