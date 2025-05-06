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
    <g stroke="currentColor" stroke-linecap="round"><path d="M10.293 8.793 8.207 6.707a1 1 0 0 0-1.414 0L4.707 8.793a1 1 0 0 0 0 1.414l2.086 2.086a1 1 0 0 0 1.414 0l2.086-2.086a1 1 0 0 0 0-1.414ZM4.5 4.5l1.232-1.232a2.5 2.5 0 0 1 3.536 0L10.5 4.5"/><path stroke-linejoin="round" d="M10.5 2.5v2l-2 .5"/></g>
  </svg>
</template>

<script>
export default {
  name: "Rotate90Right",
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