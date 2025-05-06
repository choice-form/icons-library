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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"/><path fill="currentColor" d="M8.5 7.5v-5h4a1 1 0 0 1 1 1v4z"/></g>
  </svg>
</template>

<script>
export default {
  name: "LayoutTopRight",
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