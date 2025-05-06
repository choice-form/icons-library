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
    <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M4 9.5H.5v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5H11a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M4 9.5H.5l2.709-4.514a1 1 0 0 1 .857-.486h6.868a1 1 0 0 1 .857.486L14.5 9.5H11a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5"/><path d="M5.5 13.5h4M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "EmptyData",
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