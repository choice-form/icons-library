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
    <path fill="currentColor" d="M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2.6l2.7 2.7c.2.2.4.3.7.3s.5-.1.7-.3l2.7-2.7H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 11h-3c-.3 0-.5.1-.7.3L8 13.6l-2.3-2.3c-.2-.2-.4-.3-.7-.3H2V2h12z"/>
  </svg>
</template>

<script>
export default {
  name: "ChatLarge",
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