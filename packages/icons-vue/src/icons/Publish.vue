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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M3.587 10.78C2.772 11.464 2.5 13.5 2.5 13.5s2.033-.272 2.718-1.088c.386-.457.38-1.16-.049-1.584a1.185 1.185 0 0 0-1.582-.049"/><path d="m7.5 10.5-2-2c1.254-3.252 4.507-6.022 8.083-6 0 3.584-2.8 6.751-6.083 8"/><path d="M5.5 8.5h-3s0-2.36 1-2.86 3 .5 3 .5M7.5 10.5v3s2.36 0 2.86-1-.5-3-.5-3M10.5 5.5h.005"/></g>
  </svg>
</template>

<script>
export default {
  name: "Publish",
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