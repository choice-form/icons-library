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
    <path fill="currentColor" fill-rule="evenodd" d="M6 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2h3zM4.118 7.177A.5.5 0 0 1 4.5 7h7a.5.5 0 0 1 .493.582l-.86 5.165A1.5 1.5 0 0 1 9.653 14H6.347a1.5 1.5 0 0 1-1.48-1.253l-.86-5.165a.5.5 0 0 1 .111-.405" clip-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: "BinSolid",
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