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
    <g stroke="currentColor" stroke-linecap="round"><path d="M2.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4.5 3.5h6M11.5 4.5v6m-1 1h-6m-1-1v-6"/></g>
  </svg>
</template>

<script>
export default {
  name: "EditObject",
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