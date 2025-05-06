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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2 2.5h4.5v2H2a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5M9.5 8.5v-2H2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM5.5 10.5H2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.5z"/><path fill="currentColor" fill-opacity=".25" d="M11 2.5H6.5v2H11a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M13 6.5H9.5v2H13a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M11 10.5H5.5v2H11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "StackedBar",
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