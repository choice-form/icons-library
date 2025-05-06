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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 2.5-2 2m2-2h-2m2 0v2m-5 3-2 2m0 0v-2m0 2h2m0-5-2-2m0 0v2m0-2h2M6 6l2.5 6.5 1-3 3-1z"/>
  </svg>
</template>

<script>
export default {
  name: "InteractionTriggerOnDrag",
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