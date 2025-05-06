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
    <path stroke="currentColor" stroke-linecap="round" d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke="currentColor" d="M2.5 7.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path fill="currentColor" d="M6 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/><path stroke="currentColor" stroke-linejoin="round" d="m3 15 6.5-6.5 3 2"/>
  </svg>
</template>

<script>
export default {
  name: "EmptyImage",
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