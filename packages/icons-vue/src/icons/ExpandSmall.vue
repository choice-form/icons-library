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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 2.5H12A1.5 1.5 0 0 1 13.5 4v1.5M5.5 2.5H4A1.5 1.5 0 0 0 2.5 4v1.5M10.5 13.5H12a1.5 1.5 0 0 0 1.5-1.5v-1.5M5.5 13.5H4A1.5 1.5 0 0 1 2.5 12v-1.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "ExpandSmall",
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