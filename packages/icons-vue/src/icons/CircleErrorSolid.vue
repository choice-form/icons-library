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
    <path fill="currentColor" fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8M6.207 4.793a1 1 0 0 0-1.414 1.414L6.586 8 4.793 9.793a1 1 0 0 0 1.414 1.414L8 9.414l1.793 1.793a1 1 0 0 0 1.414-1.414L9.414 8l1.793-1.793a1 1 0 0 0-1.414-1.414L8 6.586z" clip-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: "CircleErrorSolid",
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