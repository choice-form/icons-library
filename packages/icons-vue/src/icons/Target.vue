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
    <path stroke="currentColor" d="M12.5 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"/><path stroke="currentColor" d="M10 7.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"/><path fill="currentColor" d="M8 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
  </svg>
</template>

<script>
export default {
  name: "Target",
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