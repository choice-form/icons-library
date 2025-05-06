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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 4.5h4M1.5 4.5h2M5.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 10.5h-4M14.5 10.5h-2M10.5 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></g>
  </svg>
</template>

<script>
export default {
  name: "SetupPreferences",
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