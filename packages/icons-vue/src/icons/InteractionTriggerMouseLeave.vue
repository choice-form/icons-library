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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 9.5v1a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1m-7 2h5m0 0-2-2m2 2-2 2"/>
  </svg>
</template>

<script>
export default {
  name: "InteractionTriggerMouseLeave",
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