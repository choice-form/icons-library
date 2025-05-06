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
    <g stroke="currentColor"><path d="M2.5 3.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zM2.5 9.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM9.5 3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM7.5 9.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z"/></g>
  </svg>
</template>

<script>
export default {
  name: "StackRowWrap",
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