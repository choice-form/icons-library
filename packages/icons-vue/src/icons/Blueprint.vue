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
    <g stroke="currentColor" stroke-linecap="round"><path d="M13.5 7.5v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-5m0-4v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1M2.5 5.5h11M4.5 9.5h1m2 0h1m2 0h1M4.5 7.5h1m2 0h1m2 0h1M4.5 11.5h1m2 0h1m2 0h1M4.5 3.5h7"/></g>
  </svg>
</template>

<script>
export default {
  name: "Blueprint",
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