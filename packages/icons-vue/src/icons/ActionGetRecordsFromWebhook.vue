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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 12.5a2 2 0 1 1-3-1.732"/><path fill="currentColor" fill-opacity=".25" d="M11.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path d="M3.5 12.5h.005M14.5 9.5a1 1 0 0 0-1-1h-2m0-3h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m6 0a2 2 0 1 0-3.163 1.628L4.5 10.5M7.5 5.5l2 3.5M5.5 12.5h4"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionGetRecordsFromWebhook",
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