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
    <g fill="currentColor"><path d="M6.59 2.24 3.55 5.28a5.24 5.24 0 0 0 0 7.41l.435.436a2.62 2.62 0 0 1 0-3.705l2.027-2.027a1.97 1.97 0 0 0 .577-1.393z"/><path d="M14 2.24 6.761 9.477a1.31 1.31 0 0 1-1.853 0l-.126-.126-.435.436a2.104 2.104 0 0 0 0 2.976l.365.364a2.105 2.105 0 0 0 2.975 0l5.734-5.734c.37-.37.577-.87.577-1.394z"/></g>
  </svg>
</template>

<script>
export default {
  name: "Choiceform",
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