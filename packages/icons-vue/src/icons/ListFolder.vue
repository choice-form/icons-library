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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.728 3.184 7.5 5.5h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-.999V3.5a1 1 0 0 1 1-.999h2.28a1 1 0 0 1 .948.684M7.5 5.5h-5"/></g>
  </svg>
</template>

<script>
export default {
  name: "ListFolder",
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