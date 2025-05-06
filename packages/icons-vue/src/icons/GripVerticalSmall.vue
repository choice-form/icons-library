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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/></g>
  </svg>
</template>

<script>
export default {
  name: "GripVerticalSmall",
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