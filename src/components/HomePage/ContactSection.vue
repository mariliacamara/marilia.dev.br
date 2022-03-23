<template>
  <div id="contact" class="contact">
    <h2>{{ title }}</h2>
    <div class="email">
      envie-me um email em
      <a class="mailto" href="mailto:mariliacamara.dev@gmai.com"
        >mariliacamara.dev@gmail.com</a
      >
      ou
      <ul>
        <li>
          <ToolTip text="LinkedIn">
            <a href="https://linkedin.com/in/mariliacamara"
              ><img src="../../assets/socials/linkedin.svg" alt="LinkedIn"
            /></a>
          </ToolTip>
        </li>
        <li>
          <ToolTip text="Github">
            <a href="https://github.com/mariliacamara"
              ><img src="../../assets/socials/github2.svg" alt="GitHub"
            /></a>
          </ToolTip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ToolTip from "@/components/Tooltip";

export default Vue.extend({
  name: "ContactSection",
  components: {
    ToolTip,
  },
  props: {
    title: String,
  },
});
</script>

<style scoped>
.contact {
  @apply w-full container mx-auto;
}

.contact h2 {
  text-transform: none;
  @apply mb-[3rem] text-4xl text-3xl font-light font-plex text-teal-400;
}

.email {
  @apply text-2xl lg:flex lg:items-center text-center lg:text-left;
}
.email .mailto {
  @apply bg-teal-500 text-dark p-1 my-4 lg:my-0 lg:mx-2 transition duration-150 ease-out hover:ease-in block lg:inline-block;
}

.email img {
  width: 50px;
}

.email ul {
  @apply ml-0 lg:ml-[1rem] mt-3 lg:mt-0 lg:inline-block;
}

.email li {
  padding: 0 1rem;
  @apply inline-block;
}
</style>
