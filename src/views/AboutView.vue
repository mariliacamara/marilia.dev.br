<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutView",
  data() {
    return {
      presentation: {
        title: "Medium length hero headline goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: "http://",
      },
    };
  },
});
</script>

<style>
.about h1 {
  @apply text-neutral-50;
}
</style>
