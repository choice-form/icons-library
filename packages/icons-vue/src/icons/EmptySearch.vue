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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 6.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M4.5 4.5c0-2.5 4-2.5 4 0 0 2-2 1-2 3M15.5 15.5l-3-3M6.505 9.5v1"/></g>
  </svg>
</template>

<script>
export default {
  name: "EmptySearch",
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