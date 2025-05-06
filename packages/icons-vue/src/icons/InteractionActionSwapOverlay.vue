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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5h10m-10 0L4 6M2.5 7.5 4 9m8.5-1.5L11 6m1.5 1.5L11 9M2.5 2.5h3a1 1 0 0 1 1 1v2m0 4v2a1 1 0 0 1-1 1h-3m6-7v-2a1 1 0 0 1 1-1h3m-4 7v2a1 1 0 0 0 1 1h3"/></g>
  </svg>
</template>

<script>
export default {
  name: "InteractionActionSwapOverlay",
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