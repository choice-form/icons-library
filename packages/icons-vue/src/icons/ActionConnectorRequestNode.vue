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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 13.5 13 12m0 0-2.5-1.5L12 9m1 3 1.5-1.5L12 9m1.5-1.5L12 9"/><path fill="currentColor" fill-opacity=".25" d="M7.5 13.5h-1a3 3 0 1 1 0-6h1z"/><path d="M3.5 10.5h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h9M7.5 12.5h2m-2-4h2M11.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionConnectorRequestNode",
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