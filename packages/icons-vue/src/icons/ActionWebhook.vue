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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4 11 1.24-2.171 1.51-2.664a2.5 2.5 0 1 1 3.7-1.665M6.292 10A2.5 2.5 0 1 1 3.5 8.55"/><path d="M3.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0"/><path stroke-opacity=".25" d="M10.925 8.55 8 4m0 .5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/><path d="M8.5 11h-2M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionWebhook",
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