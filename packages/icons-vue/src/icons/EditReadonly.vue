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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5.5 8.5-2 2-1 3 3-1 2-2m1-5 2.293-2.293a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L10.5 7.5M9.5 4.5l2 2M2.5 2.5l11 11"/></g>
  </svg>
</template>

<script>
export default {
  name: "EditReadonly",
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