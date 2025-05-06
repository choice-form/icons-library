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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13 11.5h-3M14.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1.5 12.5h2m0 0h3m-3 0v-11m0 11v2m2-4V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5m2-1V6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "ChartDelete",
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