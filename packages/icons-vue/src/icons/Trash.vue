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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 3.5h2m0 0v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9m-8 0h2m8 0h-2m0 0h-2m-4 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1m-4 0h4"/>
  </svg>
</template>

<script>
export default {
  name: "Trash",
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