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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12.5h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1"/><path fill="currentColor" fill-opacity=".25" d="M2.5 3.5v5a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h3v-2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1"/></g>
  </svg>
</template>

<script>
export default {
  name: "BooleanDifference",
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