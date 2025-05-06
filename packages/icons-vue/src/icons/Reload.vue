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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.591 7a5.5 5.5 0 0 1 10.694-.527"/><path d="M13.5 2.5v4l-3.969-.493M13.409 9a5.5 5.5 0 0 1-10.694.527"/><path d="M2.5 13.5v-4l3.969.493"/></g>
  </svg>
</template>

<script>
export default {
  name: "Reload",
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