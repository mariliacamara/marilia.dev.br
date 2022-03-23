<template>
  <div id="jobs" class="clients">
    <h2>{{ title }}</h2>

    <carousel
      :perPageCustom="[
        [768, 3],
        [1024, 4],
      ]"
    >
      <slide> <img src="../../assets/clients/wella.png" alt="Wella" /> </slide>
      <slide>
        <img src="../../assets/clients/palafit.png" alt="Palafit" />
      </slide>
      <slide> <img src="../../assets/clients/wella.png" alt="Wella" /> </slide>
      <slide>
        <img src="../../assets/clients/palafit.png" alt="Palafit" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import Vue from "vue";
import { Carousel, Slide } from "vue-carousel";

export default Vue.extend({
  name: "ClientSection",
  components: {
    Carousel,
    Slide,
  },
  props: {
    title: String,
  },
  data() {
    return {
      items: ["hello", "hi"],
    };
  },
});
</script>

<style scoped>
.clients {
  @apply w-full container mx-auto mb-[3rem];
}

.clients h2 {
  text-transform: none;
  @apply mb-[3rem] text-4xl text-3xl font-light font-plex text-teal-400;
}
.clients img {
  widows: 100%;
  max-width: 200px;
  margin: 0 auto;
  @apply p-8 lg:p-0;
}

.VueCarousel {
  @apply text-center;
}

.VueCarousel-slide {
  @apply flex items-center;
}
</style>
