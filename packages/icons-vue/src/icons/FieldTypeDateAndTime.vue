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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2m5-9h1a1 1 0 0 1 1 1v1m-6-2h2M2.5 6.5h5M4.5 2.5v2m6-2v2M11.5 11.5l-1-1v-1"/><path d="M13.5 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M4.5 8.5h.005m-.005 2h.005"/></g>
  </svg>
</template>

<script>
export default {
  name: "FieldTypeDateAndTime",
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