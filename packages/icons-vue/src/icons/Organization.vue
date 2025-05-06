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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 5.5h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2m3 0h4a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1M4.5 7.5h.005m-.005 2h.005m-.005 2h.005M9.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005"/></g>
  </svg>
</template>

<script>
export default {
  name: "Organization",
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