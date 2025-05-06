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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.733 5.25C9.321 3.619 8.476 2.5 7.5 2.5 6.12 2.5 5 4.739 5 7.5s1.12 5 2.5 5q.257 0 .5-.1m1.097-4.046 1.907.93-.93 1.906M11 9.286c-.902.442-2.137.715-3.5.715-2.761 0-5-1.12-5-2.5S4.739 5 7.5 5c2.419 0 4.437.859 4.9 2"/>
  </svg>
</template>

<script>
export default {
  name: "Transforms3dRotate",
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