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
    <path fill="currentColor" fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.207 4.793a1 1 0 0 0-1.414 1.414l.793.793H7a1 1 0 0 0 0 2h3.586l-.793.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414zM3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: "CircleSkipSolid",
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