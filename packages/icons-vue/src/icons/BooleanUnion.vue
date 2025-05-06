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
    <path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3a1 1 0 0 0-1-1"/>
  </svg>
</template>

<script>
export default {
  name: "BooleanUnion",
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