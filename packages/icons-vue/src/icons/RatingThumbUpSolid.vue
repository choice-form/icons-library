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
    <g fill="currentColor"><path d="M2 7H1a.945.945 0 0 0-1 1v7a.945.945 0 0 0 1 1h1zM14 6H9V2a1.89 1.89 0 0 0-2-2L4 7v9h8a2.91 2.91 0 0 0 2.9-2.4l1-5.2A1.937 1.937 0 0 0 14 6"/></g>
  </svg>
</template>

<script>
export default {
  name: "RatingThumbUpSolid",
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