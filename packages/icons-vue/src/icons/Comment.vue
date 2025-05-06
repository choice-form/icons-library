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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.267C13.5 4.634 11.037 2.5 8 2.5S2.5 4.634 2.5 7.267s2.463 4.766 5.5 4.766a6.4 6.4 0 0 0 1.123-.1L12 13.5v-3a4.46 4.46 0 0 0 1.5-3.233"/>
  </svg>
</template>

<script>
export default {
  name: "Comment",
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