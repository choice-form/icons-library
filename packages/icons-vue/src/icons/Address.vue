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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.603 7.192C12.536 4.392 10.452 1.5 7.5 1.5S2.464 4.392 3.397 7.192C4.191 9.572 7.5 13.5 7.5 13.5s3.31-3.928 4.103-6.308"/><path d="M5.5 5.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/></g>
  </svg>
</template>

<script>
export default {
  name: "Address",
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