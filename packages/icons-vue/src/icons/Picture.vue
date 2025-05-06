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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="m9.346 7.11-5.919 5.524a.5.5 0 0 0 .342.866H12.5a1 1 0 0 0 1-1v-3l-2.82-2.418a1 1 0 0 0-1.334.028"/><path d="M4.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>
  </svg>
</template>

<script>
export default {
  name: "Picture",
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