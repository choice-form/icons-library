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
    <g stroke="currentColor"><path d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M11.5 12.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1"/><path fill="currentColor" fill-opacity=".25" stroke-linecap="round" stroke-linejoin="round" d="M8 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
  </svg>
</template>

<script>
export default {
  name: "Contactinfo",
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