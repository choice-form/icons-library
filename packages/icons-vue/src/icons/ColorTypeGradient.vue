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
    <g stroke="currentColor"><path d="M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".75" d="M6.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" d="M8.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M10.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/></g>
  </svg>
</template>

<script>
export default {
  name: "ColorTypeGradient",
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