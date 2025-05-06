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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m7-5v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8.5M6.5 3V2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1m0 5v2a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8M5.5 6.5l2-2 3 3 3-3"/></g>
  </svg>
</template>

<script>
export default {
  name: "MixedLineAndBar",
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