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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path d="M4.5 5.5v6h6M4.5 11.5l3-3"/></g>
  </svg>
</template>

<script>
export default {
  name: "TransformsDepth",
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