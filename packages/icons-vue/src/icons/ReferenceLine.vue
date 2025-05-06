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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-opacity=".25" d="M1.5 7.5h12m-6-6v12"/><path d="M12.5 4.5v-1a1 1 0 0 0-1-1h-1m2 8v1a1 1 0 0 1-1 1h-1m-8-2v1a1 1 0 0 0 1 1h1m-2-8v-1a1 1 0 0 1 1-1h1"/></g>
  </svg>
</template>

<script>
export default {
  name: "ReferenceLine",
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