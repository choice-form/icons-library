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
    <g stroke="currentColor" stroke-linecap="round"><path d="M7.5 5.5v4"/><path stroke-linejoin="round" d="M7.5 11.5h.005"/><path d="m1.862 12.776 5.19-10.382a.5.5 0 0 1 .895 0l5.191 10.382a.5.5 0 0 1-.447.724H2.309a.5.5 0 0 1-.447-.724Z"/></g>
  </svg>
</template>

<script>
export default {
  name: "WarningTriangle",
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