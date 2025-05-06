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
    <path fill="currentColor" fill-opacity=".25" d="M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.379 5.379a3 3 0 0 0 0 4.242l-2.122 2.122a6 6 0 0 1 0-8.486zM9.621 9.621a3 3 0 0 0 0-4.242l2.122-2.122a6 6 0 0 1 0 8.486z"/>
  </svg>
</template>

<script>
export default {
  name: "Support",
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