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
    <g fill="currentColor"><path fill-rule="evenodd" d="M5 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m5-2a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H10z" clip-rule="evenodd"/><path d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
  </svg>
</template>

<script>
export default {
  name: "AddBranchSolid",
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