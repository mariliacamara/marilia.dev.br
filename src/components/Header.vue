<template>
  <div class="header z-50">
    <nav class="navigation">
      <a href="/" class="logo">
        <span>{{ name }}</span>
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="menu hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul>
          <li>
            <a href="#" aria-current="page">sobre</a>
          </li>
          <li>
            <a href="#services">serviços</a>
          </li>
          <li>
            <a href="#experiences">experiências</a>
          </li>
          <li>
            <a href="#jobs">clientes</a>
          </li>
          <li>
            <a href="#">contato</a>
          </li>
          <!-- <li>
            <a href="#">blog</a>
          </li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MainHeader",
  props: {
    name: String,
  },
});
</script>

<style>
.navigation {
  display: block;
  @apply container mx-auto flex flex-wrap flex-row justify-between items-center py-12 border-b border-zinc-900;
}

.logo {
  @apply flex flex-col text-center;
}

.logo span {
  @apply text-xl font-bold font-plex lowercase text-teal-300;
}

.menu ul {
  @apply flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium;
}

.menu a {
  @apply mx-6 text-base font-thin;
}

.menu a:last-child {
  @apply mr-0;
}
</style>
