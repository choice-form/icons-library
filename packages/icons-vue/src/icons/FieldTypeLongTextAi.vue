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
    <g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M3 5.5h3M8.5 2.5h4m-4 3h4m-10 4h3m-3 3h3M2.5 6.5l2-4 2 4"/><path stroke="#AB0A83" d="M7.5 10.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3"/></g>
  </svg>
</template>

<script>
export default {
  name: "FieldTypeLongTextAi",
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