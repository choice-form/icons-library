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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 4v5A1.5 1.5 0 0 0 4 10.5h2l2 3 2-3h2A1.5 1.5 0 0 0 13.5 9V4A1.5 1.5 0 0 0 12 2.5H4A1.5 1.5 0 0 0 2.5 4"/>
  </svg>
</template>

<script>
export default {
  name: "Chat",
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