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
    <g stroke="currentColor" stroke-linecap="round"><path d="M7.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 7.5h5"/><path stroke-linejoin="round" d="m4 10 4.5 2.5L13 10V5L8.5 2.5 4 5"/></g>
  </svg>
</template>

<script>
export default {
  name: "ApplyVariable",
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