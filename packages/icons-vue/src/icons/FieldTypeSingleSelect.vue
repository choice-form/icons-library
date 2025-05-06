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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 4.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M8.5 4.5h4m-4 6h4M2.5 10.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4.5 4.5h.005"/></g>
  </svg>
</template>

<script>
export default {
  name: "FieldTypeSingleSelect",
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