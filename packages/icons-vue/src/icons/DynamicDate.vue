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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 2.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5m2-9h1a1 1 0 0 1 1 1v2m-6-3h2M1.5 5.5h10M3.5 1.5v2m6-2v2M3.5 7.5h.005m1.995 0h.005m1.995 0h.005M3.5 9.5h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9"/></g>
  </svg>
</template>

<script>
export default {
  name: "DynamicDate",
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