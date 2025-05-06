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
    <g stroke-linecap="round" stroke-linejoin="round"><path stroke="#05F" d="M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9"/><path stroke="currentColor" d="M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5m2-9h1a1 1 0 0 1 1 1v1m-6-2h2M2.5 6.5h8M4.5 2.5v2m6-2v2M4.5 8.5h.005m-.005 2h.005M6.5 8.5h.005m-.005 2h.005M8.5 8.5h.005"/></g>
  </svg>
</template>

<script>
export default {
  name: "FieldTypeSystemDate",
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