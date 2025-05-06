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
    <g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M2.5 2.5v9a2 2 0 1 0 4 0v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M6.5 6.672 9.621 3.55a1 1 0 0 1 1.415 0l1.414 1.414a1 1 0 0 1 0 1.415l-.293.293M8.5 13.5h-4M4.5 11.5h.005"/><path stroke="#AB0A83" d="M8.5 11.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3"/></g>
  </svg>
</template>

<script>
export default {
  name: "SwatchbookAi",
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