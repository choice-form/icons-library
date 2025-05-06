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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m13.5 6.5-3 3.5v4.5l-2-1V10l-3-3.5"/><path stroke-opacity=".25" d="M8.5 6.5h2"/><path d="M4.5 4.5h10M13.5 2.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionGetSegmentFilters",
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