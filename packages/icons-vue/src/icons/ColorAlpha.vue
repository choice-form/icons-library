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
    <path stroke="currentColor" d="M7.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path fill="currentColor" fill-opacity=".5" d="M3.964 11.036a5 5 0 1 0 7.072-7.072L7.5 7.5z"/>
  </svg>
</template>

<script>
export default {
  name: "ColorAlpha",
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