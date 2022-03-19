<template>
  <div class="header">
    <div class="navigation">
      <div class="logo">
        <h1>Marília Câmara</h1>
      </div>
      <nav class="menu">
        <a href="#about">about</a>
        <a href="#MyStacks">my stacks</a>
        <a href="#Jobs">jobs</a>
        <a href="#Contact">contact</a>
        <router-link :to="{ name: 'AboutPage' }">blog</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MainHeader",
  props: {
    msg: String,
  },
});
</script>

<style>
.navigation {
  display: block;
  @apply container mx-auto flex flex-row justify-between items-center py-9 border-b border-zinc-900;
}

.logo {
  @apply flex flex-col text-center;
}

.logo h1 {
  @apply text-xl font-bold uppercase text-violet-50;
}

.logo p {
  @apply text-sm font-thin lowercase;
}

.menu a {
  @apply mx-6 text-xl font-thin;
}

.menu a:last-child {
  @apply mr-0;
}
</style>
