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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12.5h1a2 2 0 0 0 2-2v-1m-7 3h-1a2 2 0 0 1-2-2v-1m0-4v-1a2 2 0 0 1 2-2h1m4 0h1a2 2 0 0 1 2 2v1"/>
  </svg>
</template>

<script>
export default {
  name: "RadiusAll",
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