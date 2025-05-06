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
    <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6.5a.5.5 0 0 1-.5-.5z"/><path d="M2 7a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .5.5V10h3.5a.5.5 0 0 1 .5.5V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/></g>
  </svg>
</template>

<script>
export default {
  name: "DuplicateSolid",
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