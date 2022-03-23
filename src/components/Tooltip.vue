<template>
  <div class="tooltip-container">
    <slot />
    <div class="tooltip">
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolTip",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
}

.tooltip {
  color: #ffffff;
  text-align: center;
  padding: 3px 0;
  border-radius: 5px;

  width: 100px;
  bottom: 120%;
  left: 50%;
  margin-left: -60px;

  opacity: 0;
  transition: opacity 1s;

  position: absolute;
  z-index: 1;

  background: #000000;
}
.tooltip span {
  @apply text-sm;
}
</style>
