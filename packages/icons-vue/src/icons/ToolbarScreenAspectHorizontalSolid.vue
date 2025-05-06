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
    <path fill="currentColor" fill-rule="evenodd" d="M3 2.5A2.5 2.5 0 0 1 5.5 0h5A2.5 2.5 0 0 1 13 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 13.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: "ToolbarScreenAspectHorizontalSolid",
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