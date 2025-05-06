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
    <mask id="a" width="16" height="16" x="0" y="0" mask-type="luminance" maskUnits="userSpaceOnUse"><path fill="#fff" d="M16 0H0v16h16z"/></mask><g mask="url(#a)"><path fill="currentColor" d="M15.033 6.667h-7v3H12c-.633 2-2.2 2.666-4 2.666a4.333 4.333 0 1 1 2.782-7.65l2.18-2.077A7.332 7.332 0 1 0 8 15.333c4.044 0 7.7-2.666 7.033-8.666"/></g>
  </svg>
</template>

<script>
export default {
  name: "Google",
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