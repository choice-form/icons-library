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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m11.5 3.5 2 2m0 0-2 2m2-2h-7a2 2 0 0 0-2 2M6.5 9.5h-3a1 1 0 0 0-1 1v4m4-5V12a.5.5 0 0 0 .5.5h2.5m-3-3 3 3m0 0v2M9.5 7.5v1a1 1 0 0 0 1 1h3m-4-8v2"/></g>
  </svg>
</template>

<script>
export default {
  name: "FileMove",
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