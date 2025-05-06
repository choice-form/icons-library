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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M9.5 5V2.6a5.01 5.01 0 0 1 3.9 3.9H11C11 6 10 5 9.5 5"/><path d="M2.5 8.5a5 5 0 0 0 10 0h-3a2 2 0 1 1-2-2v-3a5 5 0 0 0-5 5"/></g>
  </svg>
</template>

<script>
export default {
  name: "Doughnut",
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