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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 1.5h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-5"/><path fill="currentColor" fill-opacity=".25" d="M7.5 1.5h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4z"/><path d="M4.5 4.5h1m-1 3h1m-1 3h1"/></g>
  </svg>
</template>

<script>
export default {
  name: "Appearance",
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