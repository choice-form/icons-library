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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M12.5 7v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5"/><path d="M3 12.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M2.5 3v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "RowGroup",
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