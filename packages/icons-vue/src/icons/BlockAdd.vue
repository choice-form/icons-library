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
    <g stroke="currentColor" stroke-linecap="round"><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M14.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/><path stroke-linejoin="round" d="M12.5 10.5h-4m2-2v4"/><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM4.5 7.5h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2"/></g>
  </svg>
</template>

<script>
export default {
  name: "BlockAdd",
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