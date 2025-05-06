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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 2.5h-2a1 1 0 0 0-1 1v2h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0-1-1"/><path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>
  </svg>
</template>

<script>
export default {
  name: "InteractionTriggerKeyGamepad",
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