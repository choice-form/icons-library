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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m13.5 2.5-4 4m4-4v3m0-3h-3M7.5 3.5h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11m-8-8h-2v6h2m-2-3h2"/><path d="M7.5 11.5v-3l2 3v-3m2 0v3h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z"/></g>
  </svg>
</template>

<script>
export default {
  name: "UrlRedirect",
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