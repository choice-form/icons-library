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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M8.5 4.5h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"/><path d="M3.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M14.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M.5 2.5h15m-15 11h15"/></g>
  </svg>
</template>

<script>
export default {
  name: "WarningNotFound",
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