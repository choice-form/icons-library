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
    <g stroke="currentColor" stroke-linejoin="round"><path d="M7.5 2.5 12 5v5l-4.5 2.5L3 10V5z"/><path stroke-linecap="round" d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>
  </svg>
</template>

<script>
export default {
  name: "Variable",
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