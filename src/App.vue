<template>
  <div id="app">
    <MainHeader name="<maríliacâmara />" />
    <router-view />
    <MainFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainHeader from "@/components/Header.vue";
import MainFooter from "@/components/Footer.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    MainHeader,
    MainFooter,
  },
});
</script>
