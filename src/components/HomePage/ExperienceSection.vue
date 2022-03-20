<template>
  <div id="experiences">
    <h2>{{ title || "Experiences" }}</h2>
    <ol>
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
    </ol>
  </div>
</template>

<script>
import Vue from "vue";
import MyExperiences from "@/components/HomePage/MyExperiences.vue";

export default Vue.extend({
  name: "ExperienceSection",
  components: {
    MyExperiences,
  },
  props: {
    title: String,
  },
});
</script>

<style scoped>
#experiences {
  @apply flex flex-col;
}

h2 {
  @apply mb-[2rem] lowercase text-3xl font-light font-plex text-teal-400;
}

ol {
  @apply relative border-l border-gray-200 dark:border-gray-700;
}
</style>
