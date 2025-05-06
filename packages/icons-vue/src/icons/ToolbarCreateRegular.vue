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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1 15.5h14M9.793 1.207a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414l-7.597 7.597a1 1 0 0 1-.465.263L1 13l.933-3.731a1 1 0 0 1 .263-.465zM8.5 2.5l3 3"/></g>
  </svg>
</template>

<script>
export default {
  name: "ToolbarCreateRegular",
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