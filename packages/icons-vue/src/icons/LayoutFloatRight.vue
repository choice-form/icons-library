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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 2.5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"/><path fill="currentColor" fill-opacity=".25" d="M9 6.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5"/><path d="M6.5 6.5h-4m4 2h-2"/></g>
  </svg>
</template>

<script>
export default {
  name: "LayoutFloatRight",
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