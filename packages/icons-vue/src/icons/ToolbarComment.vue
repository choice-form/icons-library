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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 5.5h7M4.5 8.5h7M15.5 7C15.5 3.41 12.142.5 8 .5S.5 3.41.5 7s3.358 6.5 7.5 6.5q.788-.002 1.532-.137L13.5 15.5v-4.091c1.238-1.159 2-2.705 2-4.409"/></g>
  </svg>
</template>

<script>
export default {
  name: "ToolbarComment",
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