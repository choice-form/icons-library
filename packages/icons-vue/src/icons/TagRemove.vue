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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 12.5h4M11.892 4.5A3.54 3.54 0 0 1 11 8l-3 3a3.54 3.54 0 0 1-3.5.892m5-9.784A3.54 3.54 0 0 0 6 3L3 6a3.54 3.54 0 0 0-.892 3.5M12.5 1.5l-4 4m-3 3-4 4"/></g>
  </svg>
</template>

<script>
export default {
  name: "TagRemove",
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