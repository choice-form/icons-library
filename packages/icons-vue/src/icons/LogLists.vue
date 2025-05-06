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
    <g stroke="currentColor"><path d="M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"/><path d="M3.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/><path stroke-linecap="round" d="M7.5 5.5h4"/><path d="M3.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/><path stroke-linecap="round" d="M7.5 9.5h4"/></g>
  </svg>
</template>

<script>
export default {
  name: "LogLists",
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