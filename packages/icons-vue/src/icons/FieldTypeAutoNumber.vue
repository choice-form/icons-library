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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3.5 1-1v4M3 9.5s0-1 1-1 1 1 1 1c0 .5-.5 1-1 1.5-1.5 1.5-1 1.5-1 1.5h2M10 12.5 7.5 10m2.5 2.5 2.5-2.5M10 12.5v-10"/></g>
  </svg>
</template>

<script>
export default {
  name: "FieldTypeAutoNumber",
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