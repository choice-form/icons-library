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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.638 8.528a1.08 1.08 0 0 1 0-1.056C3.308 6.283 5.179 3.5 8 3.5s4.692 2.783 5.362 3.972a1.08 1.08 0 0 1 0 1.056C12.692 9.717 10.821 12.5 8 12.5S3.308 9.717 2.638 8.528"/><path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
  </svg>
</template>

<script>
export default {
  name: "ViewSmall",
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