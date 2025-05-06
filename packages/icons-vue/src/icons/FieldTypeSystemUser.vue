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
    <g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M3.5 12.5a3 3 0 0 1 3-3h1m2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path stroke="#05F" d="M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9"/></g>
  </svg>
</template>

<script>
export default {
  name: "FieldTypeSystemUser",
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