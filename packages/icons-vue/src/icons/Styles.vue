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
    <g stroke="currentColor"><path d="M6.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM6.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/></g>
  </svg>
</template>

<script>
export default {
  name: "Styles",
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