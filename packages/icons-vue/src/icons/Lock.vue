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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13 15.5H3A1.5 1.5 0 0 1 1.5 14V9A1.5 1.5 0 0 1 3 7.5h10A1.5 1.5 0 0 1 14.5 9v5a1.5 1.5 0 0 1-1.5 1.5M4.5 5.5V4a3.5 3.5 0 1 1 7 0v1.5"/><path d="M8 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></g>
  </svg>
</template>

<script>
export default {
  name: "Lock",
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