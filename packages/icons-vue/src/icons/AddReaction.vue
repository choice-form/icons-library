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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 13.5a6 6 0 1 1 6-6m-4 2.236a3 3 0 0 1-2 .764 3 3 0 0 1-2-.764m0-3.236h.005m3.995 0h.005M14.268 14.268l-3.536-3.536m0 3.536 3.536-3.536"/></g>
  </svg>
</template>

<script>
export default {
  name: "AddReaction",
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