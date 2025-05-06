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
    <g stroke="currentColor" stroke-linecap="round"><path d="M14.5 2.5h-12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3M3.5 5.5h2"/><path stroke-linejoin="round" d="m5.25 12.25 2.74-2.74c.305-.305.377-.772.28-1.191C8.103 7.603 8.049 6.45 9 5.5 10.5 4 12.5 5 12.5 5l-1.293 1.293a1 1 0 0 0 0 1.414l.086.086a1 1 0 0 0 1.414 0L14 6.5s1 2-.5 3.5c-.951.951-2.103.897-2.819.73-.42-.098-.886-.025-1.19.28L6.75 13.75a1.06 1.06 0 0 1-1.5-1.5"/></g>
  </svg>
</template>

<script>
export default {
  name: "ToolbarSettings",
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