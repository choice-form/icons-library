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
    <g fill="currentColor"><path d="M13.5 10A1.65 1.65 0 0 1 12 8.5V6a4 4 0 1 0-8 0v2.5A1.65 1.65 0 0 1 2.5 10a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1M8 14a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2"/></g>
  </svg>
</template>

<script>
export default {
  name: "AlarmSmallSolid",
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