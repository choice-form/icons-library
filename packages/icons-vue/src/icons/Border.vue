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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 3.5h10"/><path fill="currentColor" d="M12.5 6.5h-10v1h10zM12.5 10.5h-10v2h10z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.5h-10v1h10zM12.5 10.5h-10v2h10z"/>
  </svg>
</template>

<script>
export default {
  name: "Border",
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