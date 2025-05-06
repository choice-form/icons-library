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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-opacity=".25" d="M10.5 8.5c0 .546-.146 1.059-.401 1.5M7.5 5.5A3 3 0 0 0 4.901 10"/><path d="M12.374 12a6 6 0 1 0-9.748 0M7.5 8.5l3-3M5.5 12.5h4"/></g>
  </svg>
</template>

<script>
export default {
  name: "Nps",
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