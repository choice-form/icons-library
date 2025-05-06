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
    <g fill="currentColor"><path d="M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1-3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/><path d="M14.037 16H1.955a1.93 1.93 0 0 1-1.649-.932 2.04 2.04 0 0 1-.086-1.999L6.228 1.088A1.94 1.94 0 0 1 7.959 0h.005c.731 0 1.395.413 1.732 1.08l6.073 11.982a2.04 2.04 0 0 1-.082 2.003 1.93 1.93 0 0 1-1.65.935M7.965 2.087l-5.958 11.88L13.972 14z"/></g>
  </svg>
</template>

<script>
export default {
  name: "TriangleWarningLarge",
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