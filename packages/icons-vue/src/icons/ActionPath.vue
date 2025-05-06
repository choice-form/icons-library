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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path fill="currentColor" fill-opacity=".25" d="M11.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M4.5 2.5h7m0 5h-6m-2-2v6a1 1 0 0 0 1 1h7"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionPath",
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