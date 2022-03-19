<template>
  <div class="experiences">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MyExperiences",
  props: {
    title: String,
    role: String,
    description: String,
    year: String,
  },
});
</script>

<style scoped></style>
