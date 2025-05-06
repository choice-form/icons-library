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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5c0-1 2-2 5-2s5 1 5 2m-10 0c0 1 2 2 5 2s5-1 5-2m-10 0v2c0 1 2 2 5 2s5-1 5-2v-2M6 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></g>
  </svg>
</template>

<script>
export default {
  name: "InteractionTriggerWhileHovering",
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