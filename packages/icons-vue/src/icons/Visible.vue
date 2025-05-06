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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8.576C12.873 6.237 10.5 4.5 8 4.5S3.127 6.237 2.5 8.576"/><path fill="currentColor" d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  </svg>
</template>

<script>
export default {
  name: "Visible",
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