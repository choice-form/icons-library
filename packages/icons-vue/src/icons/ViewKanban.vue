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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5V13a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V3.5m-8 0V7a.5.5 0 0 0 .5.5h1.5m10-4V10a.5.5 0 0 1-.5.5h-1.5M1.5 1.5h12"/></g>
  </svg>
</template>

<script>
export default {
  name: "ViewKanban",
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