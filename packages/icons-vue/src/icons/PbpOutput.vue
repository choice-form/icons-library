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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8.5V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447v6.382a.5.5 0 0 0 .276.447l5.5 2.75a.5.5 0 0 0 .448 0L9.5 13.5"/><path d="M11.5 5.5 7.724 7.388a.5.5 0 0 1-.448 0L3.5 5.5"/><path stroke-opacity=".25" d="M3.5 7.5v3l2 1M5.5 4.5l2-1 2 1"/><path d="m11.5 13.5 2-2m0 0-2-2m2 2h-4a2 2 0 0 1-2-2v-2"/></g>
  </svg>
</template>

<script>
export default {
  name: "PbpOutput",
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