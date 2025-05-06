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
    <g stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h3"/><path d="m13.793 8.793-1.586-1.586a1 1 0 0 0-1.414 0l-.586.586a1 1 0 0 0 0 1.414l1.586 1.586a1 1 0 0 0 1.414 0l.586-.586a1 1 0 0 0 0-1.414Z"/><path stroke-linecap="round" d="m11 10-3.5 3.5M9.5 13.5l-1-1m2 0-1-1"/></g>
  </svg>
</template>

<script>
export default {
  name: "UseAdminister",
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