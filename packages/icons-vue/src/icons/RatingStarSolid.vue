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
    <path fill="currentColor" d="m15.144 5.438-4.316-.627L8.897.9C8.559.217 7.441.217 7.103.9l-1.93 3.911-4.317.627a1.002 1.002 0 0 0-.554 1.707l3.124 3.044-.737 4.299a1 1 0 0 0 1.451 1.054L8 13.513l3.861 2.03c.728.381 1.591-.234 1.451-1.054l-.737-4.299 3.124-3.044a1.003 1.003 0 0 0-.555-1.708"/>
  </svg>
</template>

<script>
export default {
  name: "RatingStarSolid",
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