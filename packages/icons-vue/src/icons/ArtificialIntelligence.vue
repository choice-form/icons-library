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
    <g stroke="currentColor" stroke-linejoin="round"><path d="M8 2.5C8 5.814 10.186 8 13.5 8 10.186 8 8 10.186 8 13.5 8 10.186 5.814 8 2.5 8 5.814 8 8 5.814 8 2.5Z"/><path stroke-linecap="round" d="M10.5 4.5h2M3.5 11.5h2M11.5 3.5v2M4.5 10.5v2"/></g>
  </svg>
</template>

<script>
export default {
  name: "ArtificialIntelligence",
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