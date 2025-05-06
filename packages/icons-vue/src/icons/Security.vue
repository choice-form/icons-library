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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 1.5-5 3c0 6 5 9 5 9s5-3 5-9z"/><path fill="currentColor" fill-opacity=".25" d="M6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M7.5 7.5v2"/></g>
  </svg>
</template>

<script>
export default {
  name: "Security",
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