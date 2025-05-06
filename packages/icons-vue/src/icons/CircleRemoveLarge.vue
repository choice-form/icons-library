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
    <g fill="currentColor"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6"/><path d="m9.414 8 1.768-1.768a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0L8 6.586 6.232 4.818a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707L6.586 8 4.818 9.768a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0L8 9.414l1.768 1.768a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707z"/></g>
  </svg>
</template>

<script>
export default {
  name: "CircleRemoveLarge",
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