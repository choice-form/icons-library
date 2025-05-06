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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7.5 3.5v3m1 2 1 1"/></g>
  </svg>
</template>

<script>
export default {
  name: "TriggerStartedAtASpecificTime",
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