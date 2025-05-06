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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 13.5v-2M4.5 5.5v-3M4.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 2.5v2M11.5 10.5v3M11.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
  </svg>
</template>

<script>
export default {
  name: "SystemPreferences",
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