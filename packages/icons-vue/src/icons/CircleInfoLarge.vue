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
    <g fill="currentColor"><path d="M8 0a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.02 6.02 0 0 1-6 6"/><path d="M8.5 7h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></g>
  </svg>
</template>

<script>
export default {
  name: "CircleInfoLarge",
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