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
    <g stroke="currentColor" stroke-linecap="round"><path d="M7.5 4.5 8 4a2.121 2.121 0 1 1 3 3l-.5.5M7.5 10.5 7 11a2.121 2.121 0 0 1-3-3l.5-.5"/><path stroke-linejoin="round" d="M11 9.5h1.5m-3 1.5v1.5M5.5 4V2.5M4 5.5H2.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "HyperlinkBroken",
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