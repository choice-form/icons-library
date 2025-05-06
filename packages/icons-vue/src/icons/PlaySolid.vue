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
    <path fill="currentColor" fill-rule="evenodd" d="M4.249 3.068a.5.5 0 0 1 .5-.002l7 4a.5.5 0 0 1 0 .868l-7 4A.5.5 0 0 1 4 11.5v-8a.5.5 0 0 1 .249-.432" clip-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: "PlaySolid",
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