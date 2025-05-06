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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M2.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M2.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M3.5 11.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2v-2M3.5 3.5v3"/></g>
  </svg>
</template>

<script>
export default {
  name: "LogicSolid",
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