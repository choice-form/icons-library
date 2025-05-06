<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    :viewBox="viewBox" 
    :width="width" 
    :height="height" 
    :fill="color" 
    :aria-hidden="!title" 
    class="choiceform-icon"
  >
    <title v-if="title">{{ title }}</title>
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 4.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2"/></g>
  </svg>
</template>

<script>
export default {
  name: "Quadrant",
  props: {
    width: {
      type: [String, Number],
      default: "16"
    },
    height: {
      type: [String, Number],
      default: "16"
    },
    viewBox: {
      type: String,
      default: "0 0 16 16"
    },
    color: {
      type: String,
      default: "none"
    },
    title: {
      type: String,
      default: null
    }
  }
};
</script>