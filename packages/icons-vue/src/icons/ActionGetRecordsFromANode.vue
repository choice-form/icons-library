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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 12.5h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7m-8-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionGetRecordsFromANode",
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