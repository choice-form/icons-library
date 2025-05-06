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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 13.5h-2v-5h2M4.5 8.5l2-6H7A1.5 1.5 0 0 1 8.5 4v2.5h3.27a1.5 1.5 0 0 1 1.485 1.712l-.571 4A1.5 1.5 0 0 1 11.2 13.5H4.5z"/></g>
  </svg>
</template>

<script>
export default {
  name: "ThumbUp",
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