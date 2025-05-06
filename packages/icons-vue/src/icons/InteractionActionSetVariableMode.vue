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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 10.5a2 2 0 0 1-4 0v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"/><path d="M10.35 8.5h1.15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6M5.5 10.5h.005"/><path d="m7.5 6 1.15-1.15a1.2 1.2 0 0 1 1.702.002l.948.948a1.2 1.2 0 0 1 .013 1.717L6.95 11.9"/></g>
  </svg>
</template>

<script>
export default {
  name: "InteractionActionSetVariableMode",
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