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
    <path fill="currentColor" d="M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.266l2.35 2.82a.5.5 0 0 0 .768 0l2.35-2.82H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2"/>
  </svg>
</template>

<script>
export default {
  name: "ChatLargeSolid",
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