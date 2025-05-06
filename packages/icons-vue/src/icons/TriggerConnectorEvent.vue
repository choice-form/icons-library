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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 6 5.5 7.5M10 9l-1.5 1.5M13 3a3.536 3.536 0 0 0-5 0l-.5.5 5 5L13 8a3.536 3.536 0 0 0 0-5m0 0 1.5-1.5M4 12a3.536 3.536 0 0 0 5 0l.5-.5-5-5L4 7a3.536 3.536 0 0 0 0 5m0 0-2.5 2.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "TriggerConnectorEvent",
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