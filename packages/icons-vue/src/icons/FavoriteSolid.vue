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
    <path fill="currentColor" d="M12.988 4.055a3.34 3.34 0 0 0-5.001.149 3.336 3.336 0 0 0-5.006-.141A3.7 3.7 0 0 0 2.989 9.1l4.641 4.75a.5.5 0 0 0 .715 0l4.644-4.75a3.614 3.614 0 0 0-.001-5.045"/>
  </svg>
</template>

<script>
export default {
  name: "FavoriteSolid",
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