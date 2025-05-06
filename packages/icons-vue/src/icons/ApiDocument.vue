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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12V3.5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v8m-7-3 .5-1m0 0 1.5-3 1.5 3m-3 0h3m.5 1-.5-1"/><path d="M12 13.5H4a1.5 1.5 0 0 1 0-3h8.5V13a.5.5 0 0 1-.5.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "ApiDocument",
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