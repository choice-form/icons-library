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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5H0v8h3zM5 15.5h6.9a2 2 0 0 0 1.952-1.566l1.111-5A2 2 0 0 0 13.007 6.5H9v-4a2 2 0 0 0-2-2l-2 6"/></g>
  </svg>
</template>

<script>
export default {
  name: "RatingThumbUpRegular",
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