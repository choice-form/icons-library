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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 3.5-8 8M6 4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m5.5 5.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>
  </svg>
</template>

<script>
export default {
  name: "Relative",
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