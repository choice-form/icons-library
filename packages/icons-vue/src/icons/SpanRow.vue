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
    <g stroke="currentColor"><path d="M12.5 7.5v-4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1Z"/><path stroke-linecap="round" stroke-opacity=".5" d="M12.5 10.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1"/><path stroke-linecap="round" d="M3.5 4.5s-1 1-1 3 1 3 1 3"/></g>
  </svg>
</template>

<script>
export default {
  name: "SpanRow",
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