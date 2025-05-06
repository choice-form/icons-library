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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M5.5 8.5l2-2 3 3 3-3m0 0h-2m2 0v2M6.5 10.5l1-1m2-4 4-4m0 0h-2m2 0v2"/></g>
  </svg>
</template>

<script>
export default {
  name: "MultiLine",
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