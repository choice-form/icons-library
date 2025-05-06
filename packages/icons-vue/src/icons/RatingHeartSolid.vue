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
    <path fill="currentColor" d="M11 2a3.94 3.94 0 0 0-3 1.371A3.94 3.94 0 0 0 5 2a4 4 0 0 0-2.865 6.785l5.508 5.629a.5.5 0 0 0 .715-.001l5.315-5.454A3.988 3.988 0 0 0 11 2"/>
  </svg>
</template>

<script>
export default {
  name: "RatingHeartSolid",
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