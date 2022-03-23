<template>
  <div id="home">
    <PresentationSection
      title="Hi, I'm a front-end application developer"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
    />
    <div class="container mx-auto">
      <ServicesSection title="<serviços />" />
    </div>
    <div class="wrapper">
      <ExperienceSection title="<experiências />" />
      <StacksSection title="<tecnologias />" />
    </div>
    <ClientSection title="<clientes />" />
    <ContactSection title="<contate-me />" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PresentationSection from "@/components/HomePage/PresentationSection.vue";
import ServicesSection from "@/components/HomePage/ServicesSection.vue";
import StacksSection from "@/components/HomePage/StacksSection.vue";
import ExperienceSection from "@/components/HomePage/ExperienceSection.vue";
import ClientSection from "@/components/HomePage/ClientSection.vue";
import ContactSection from "@/components/HomePage/ContactSection.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    PresentationSection,
    ServicesSection,
    StacksSection,
    ExperienceSection,
    ClientSection,
    ContactSection,
  },
});
</script>

<style scoped>
.wrapper {
  @apply container mx-auto lg:grid lg:grid-cols-2 lg:gap-[8rem] my-[4rem];
}
</style>
