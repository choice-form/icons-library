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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 1.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a.5.5 0 0 1 .5.5v1.5l2.874-1.916a.5.5 0 0 1 .277-.084H12.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M6.5 4.5h-2v2h2z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 6.5v-2h-2v2zm0 0c0 2-2 2-2 2"/><path fill="currentColor" fill-opacity=".25" d="M10.5 4.5h-2v2h2z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5v-2h-2v2zm0 0c0 2-2 2-2 2"/>
  </svg>
</template>

<script>
export default {
  name: "Statement",
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