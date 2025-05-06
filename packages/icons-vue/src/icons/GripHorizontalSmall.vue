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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/></g>
  </svg>
</template>

<script>
export default {
  name: "GripHorizontalSmall",
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