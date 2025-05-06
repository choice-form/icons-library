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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path fill="currentColor" fill-opacity=".25" d="M2.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M3.5 12.5v-4a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-3"/><path stroke-opacity=".25" d="M9.5 7.5h2a1 1 0 0 1 1 1v4"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionIf",
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