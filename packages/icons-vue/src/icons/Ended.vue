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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11m-8-8h-2v6h2m-2-3h2m2 3v-6l2 6v-6m2 0v6h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/>
  </svg>
</template>

<script>
export default {
  name: "Ended",
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