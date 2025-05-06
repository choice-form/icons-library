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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3.5 10.5 2 2m0-2-2 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 8.5v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1m-3-5v3"/></g>
  </svg>
</template>

<script>
export default {
  name: "InteractionActionConditional",
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