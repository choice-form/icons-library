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
    <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="m3.5 12.5.772-2.316a1 1 0 0 1 .949-.684H13.5m0 0a.72.72 0 0 1 .684.949l-1.456 4.367a1 1 0 0 1-.949.684H2.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H12.5a1 1 0 0 1 1 1z"/><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "EmptyFolder",
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