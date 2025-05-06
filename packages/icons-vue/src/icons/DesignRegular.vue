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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M5 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M11 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path d="M7.502 1.5c-3.3 0-6.002 2.7-6.002 6s2.701 6 6.002 6c.556 0 .99-.448.99-1.013 0-.539-.526-.81-.526-1.35-.02-1.192 1.41-1 2.2-1A3.346 3.346 0 0 0 13.5 6.803C13.484 3.907 10.78 1.5 7.502 1.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "DesignRegular",
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