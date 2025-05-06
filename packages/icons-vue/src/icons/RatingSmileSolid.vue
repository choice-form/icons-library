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
    <path fill="currentColor" fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5.429 9.542a.5.5 0 0 0-.858.515 4 4 0 0 0 6.858 0 .5.5 0 1 0-.858-.515 3 3 0 0 1-5.142 0" clip-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: "RatingSmileSolid",
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