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
    <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M10.5 5.5v-4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h5"/><path stroke-linejoin="round" d="M4 2.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M8 2.5H7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M4 6.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M4 10.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M7.5 11.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0"/><path d="M11.5 9.5v2"/><path stroke-linejoin="round" d="M11.5 13.5h.005M8 6.5H7a.5.5 0 0 0-.5.5v1"/></g>
  </svg>
</template>

<script>
export default {
  name: "EmptyOrganizations",
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