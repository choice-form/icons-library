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
    <path fill="currentColor" fill-rule="evenodd" d="M10.44 1.854a1.5 1.5 0 0 1 2.12 0l.586.585a1.5 1.5 0 0 1 0 2.122l-.792.793a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708zM8.145 4.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.196.12l-3 1a.5.5 0 0 1-.632-.632l1-3a.5.5 0 0 1 .12-.196z" clip-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: "CreateSolid",
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