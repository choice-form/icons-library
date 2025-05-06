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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M.5 15.5l5.44-5.44M7.5.5l8 8"/><path d="m13.5 6.5-2 7-11 2 2-11 7-2"/></g>
  </svg>
</template>

<script>
export default {
  name: "ToolbarPenTool",
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