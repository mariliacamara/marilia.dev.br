<template>
  <div id="home">
    <div class="presentation">
      <div class="presentation-text">
        <h2>{{ presentation.title }}</h2>
        <p>{{ presentation.description }}</p>
      </div>
      <div class="presentation-image">
        <img src="../assets/marilia.png" alt="" />
      </div>
    </div>
    <MyStacks
      title="My stacks"
      description="Here are some of the frameworks and technologies used by me"
    />
    <div id="experiences">
      <MyExperiences
        title="Frontend Application Developer at IBM"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna."
        year="2021 - now"
      />
      <MyExperiences
        title="Freelancer Frontend Developer"
        description="Building applications using HTML, CSS, Javascript. VueJS and React, as well as NextJS for Frontend and Wordpress templates"
        year="2018 - now"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyStacks from "@/components/HomePage/Stacks.vue";
import MyExperiences from "@/components/HomePage/Experiences.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    MyStacks,
    MyExperiences,
  },
  data() {
    return {
      presentation: {
        title: "Welcome,",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: "http://",
      },
    };
  },
});
</script>

<style>
.presentation {
  @apply container mx-auto flex flex-col lg:flex-row justify-center lg:columns-2 lg:gap-[80px] my-[4rem];
}

.presentation-text {
  @apply w-full flex flex-col justify-center;
}

.presentation-text h2 {
  @apply text-4xl lg:text-font-xxl  font-bold;
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
