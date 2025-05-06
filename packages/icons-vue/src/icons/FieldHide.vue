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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3m5 8h1a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4M6 7.52q.243-.02.5-.02c3.5 0 5 3 5 3s-.375.75-1.187 1.5M1.5 5.5l9 9"/><path fill="currentColor" fill-opacity=".25" d="M1.5 10.5s1.5 3 5 3c.963 0 1.774-.227 2.444-.556L4.056 8.056C2.288 8.923 1.5 10.5 1.5 10.5"/><path d="M7.207 11.207a1 1 0 0 1-1.414-1.414"/></g>
  </svg>
</template>

<script>
export default {
  name: "FieldHide",
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