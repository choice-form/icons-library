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
    <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M12.6 2.5H3.4a.9.9 0 0 0-.9.9v8.2a.9.9 0 0 0 .9.9h9.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9"/><path d="M6.5 4.5v6"/></g>
  </svg>
</template>

<script>
export default {
  name: "MinimizeUi",
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