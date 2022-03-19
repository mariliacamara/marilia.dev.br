<template>
  <div class="presentation">
    <div class="presentation-text">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="presentation-image">
      <img src="../../assets/marilia.png" alt="" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "PresentationSection",
  props: {
    title: String,
    description: String,
  },
});
</script>

<style scoped>
.presentation {
  @apply container mx-auto flex flex-col lg:flex-row justify-center lg:columns-2 lg:gap-[80px] my-[4rem];
}

.presentation-text {
  @apply w-full flex flex-col justify-center;
}

.presentation-text h2 {
  @apply text-4xl lg:text-5xl  font-bold;
}

.presentation-text p {
  @apply mt-3 text-amber-300 text-base lg:text-lg;
}

.presentation-image {
  @apply w-full flex justify-center;
}

.presentation-image img {
  @apply w-4/5 rounded-full;
}
</style>
