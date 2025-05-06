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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427"/><path d="M6 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></g>
  </svg>
</template>

<script>
export default {
  name: "InteractionTriggerWhilePressing",
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