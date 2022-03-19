<template>
  <div class="experiences">
    <div class="experience-header">
      <h2>{{ title }}</h2>
      <span>{{ year }}</span>
    </div>
    <div class="experience-description">
      <p>{{ description }}</p>
    </div>
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

<style scoped>
.experiences + .experiences {
  @apply mt-8;
}

.experiences h2 {
  text-transform: none;
  @apply mb-[1rem] text-lg font-semibold;
}

.experiences span {
  text-transform: none;
  @apply mb-[1rem] text-lg font-semibold;
}

.experience-header {
  @apply flex flex-row justify-between;
}
</style>
