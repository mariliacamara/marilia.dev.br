<template>
  <div id="home">
    <PresentationSection
      title="Hi, I'm a front-end application developer"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
    />
    <div class="container mx-auto">
      <ServicesSection title="<services />" />
    </div>
    <div class="wrapper">
      <ExperienceSection title="<experiences />" />
      <StacksSection title="<technologies />" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PresentationSection from "@/components/HomePage/PresentationSection.vue";
import ServicesSection from "@/components/HomePage/ServicesSection.vue";
import StacksSection from "@/components/HomePage/StacksSection.vue";
import ExperienceSection from "@/components/HomePage/ExperienceSection.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    PresentationSection,
    ServicesSection,
    StacksSection,
    ExperienceSection,
  },
});
</script>

<style scoped>
.wrapper {
  @apply container mx-auto lg:grid lg:grid-cols-2 lg:gap-[8rem] my-[4rem];
}
</style>
