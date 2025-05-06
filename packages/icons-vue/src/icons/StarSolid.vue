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
    <path fill="currentColor" d="m13.572 6.27-3.54-.514-1.584-3.208a.52.52 0 0 0-.9 0l-1.58 3.208-3.54.514a.5.5 0 0 0-.277.853l2.562 2.5-.606 3.526a.5.5 0 0 0 .726.527L8 12.008l3.167 1.665a.5.5 0 0 0 .726-.527l-.606-3.526 2.562-2.5a.5.5 0 0 0-.277-.853z"/>
  </svg>
</template>

<script>
export default {
  name: "StarSolid",
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