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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 13V3.5a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3A1.5 1.5 0 0 0 1.5 13m0 0A1.5 1.5 0 0 0 3 14.5h9.5a1 1 0 0 0 1-1V13"/><path fill="currentColor" fill-opacity=".25" d="M6.5 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M4.5 10.5v1h7v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2"/></g>
  </svg>
</template>

<script>
export default {
  name: "MemberAccounts",
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