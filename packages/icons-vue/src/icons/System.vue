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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 3.5s1 2 6 2 6-2 6-2-1-2-6-2-6 2-6 2"/><path d="M13.5 3.5v8s-1 2-6 2-6-2-6-2v-8"/><path d="M13.5 7.5s-1 2-6 2-6-2-6-2"/></g>
  </svg>
</template>

<script>
export default {
  name: "System",
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