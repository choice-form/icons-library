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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 3.5V3a1.5 1.5 0 0 0-3 0v6.5l-2.321-.913A1.21 1.21 0 0 0 .82 10.505l2.619 2.9a6.14 6.14 0 0 0 4.618 2.1h1.307A6.136 6.136 0 0 0 15.5 9.364V3.5a1 1 0 0 0-2 0v1"/><path d="M10.5 3.5V3a1.5 1.5 0 1 1 3 0v3.5M7.5 6.5V2a1.5 1.5 0 0 1 3 0v4.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "ToolbarHand",
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