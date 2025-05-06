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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.64 4.4a2.836 2.836 0 0 0-4.148 0A3 3 0 0 0 8 5.116a3 3 0 0 0-.493-.716 2.84 2.84 0 0 0-4.148 0 3.185 3.185 0 0 0 0 4.351L8 13.5l4.64-4.748a3.18 3.18 0 0 0 0-4.352"/>
  </svg>
</template>

<script>
export default {
  name: "Favorite",
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