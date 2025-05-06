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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 11.5v1a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-1M4.5 10.5l3-7 3 7M5.5 8.5h4M13.5 3.5v-1a1 1 0 0 0-1-1h-1m-10 2v-1a1 1 0 0 1 1-1h1"/></g>
  </svg>
</template>

<script>
export default {
  name: "AutoLayout",
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