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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 8A4.5 4.5 0 0 1 8 3.5a4.88 4.88 0 0 1 3.37 1.37L12.5 6m0 0V3.5m0 2.5H10m2.5 2A4.5 4.5 0 0 1 8 12.5a4.88 4.88 0 0 1-3.37-1.37L3.5 10m0 0H6m-2.5 0v2.5"/>
  </svg>
</template>

<script>
export default {
  name: "InteractionActionChangeTo",
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