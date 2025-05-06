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
    <g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M3.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M9.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke-linejoin="round" d="M4.5 12.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-1M4.5 6.5v2"/></g>
  </svg>
</template>

<script>
export default {
  name: "EmptyLogic",
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