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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 8.5a5 5 0 1 1-5-5"/><path stroke-opacity=".25" d="M9.5 3.916A5.02 5.02 0 0 1 12.084 6.5"/><path d="M7.5 6.5v2l-2 2M7.5 3.5v-2m-2 0h4"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionWaitForSomeTime",
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