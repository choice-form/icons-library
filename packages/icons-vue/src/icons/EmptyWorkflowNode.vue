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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5.5h-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M2.5 2.5h5M14.5 6.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M5.5 11.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M12.5 10.5v2a1 1 0 0 1-1 1h-5M3.5 11.5v-7M9.5 2.5h2a1 1 0 0 1 1 1v3M11.5 8.5h2"/></g>
  </svg>
</template>

<script>
export default {
  name: "EmptyWorkflowNode",
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