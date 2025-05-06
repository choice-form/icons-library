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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12m0 0-2-2m2 2-2 2m1 2v1a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-3M7.5 9.5v2m3-2v2m-6-2v2"/></g>
  </svg>
</template>

<script>
export default {
  name: "Journey",
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