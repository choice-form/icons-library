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
    <g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M7.5 4.5c-3.5 0-4 1-4 1s.5 1 4 1 4-1 4-1-.5-1-4-1"/><path stroke-linejoin="round" d="M2.5 6.5v.172a2 2 0 0 0 .586 1.414l3.121 3.121a1 1 0 0 1 .293.707V14.5l2 1v-3.586a1 1 0 0 1 .293-.707l3.121-3.121a2 2 0 0 0 .586-1.414V6.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "EmptyFilter",
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