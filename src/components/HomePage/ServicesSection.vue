<template>
  <div id="services" class="services">
    <h2>{{ title }}</h2>
    <div class="service-wrapper">
      <div class="service-item">
        <img src="../../assets/icons/internet.svg" alt="" />
        <h3>Desenvolvimento web</h3>
        Construções de site institucionais, landing pages
      </div>
      <div class="service-item">
        <img src="../../assets/icons/responsive.svg" alt="" />
        <h3>Design Responsivo</h3>
        Seu site cabe em todos os tipos de telas e aparelhos.
      </div>
      <div class="service-item">
        <img src="../../assets/icons/art.svg" alt="" />
        <h3>Web development</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        purus risus. Ut rutrum sollicitudin purus in accumsan.
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ServicesSection",
  props: {
    title: String,
  },
});
</script>

<style scoped>
.services {
  @apply w-full;
}

.services h2 {
  text-transform: none;
  @apply mb-[1rem] text-4xl text-3xl font-light font-plex text-teal-400;
}

.service-wrapper {
  @apply lg:grid lg:grid-cols-3 lg:gap-[6rem] mt-10;
}

.service-item {
  background-color: #161626;
  @apply w-full h-96 p-8 rounded-xl;
}

.service-item + .service-item {
  @apply mt-8 lg:mt-0;
}

.service-item h3 {
  @apply text-lg font-medium mt-6 mb-3;
}

.service-item img {
  width: 50px;
  height: 50px;
  padding: 0.6rem;
  @apply bg-teal-500 rounded-tl-lg rounded-bl-lg rounded-tr-lg;
}
</style>
