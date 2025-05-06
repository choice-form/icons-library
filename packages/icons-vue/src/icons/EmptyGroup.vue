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
    <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M1.5 6.5v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2"/><path stroke-linejoin="round" d="m3.5 6.5 1 1 2-2m2 1h3M13.5 14.5v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2"/><path stroke-linejoin="round" d="m3.5 14.5 1 1 2-2m2 1h3"/><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "EmptyGroup",
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