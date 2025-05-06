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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.654 5.982 6.36 8.277a1.335 1.335 0 1 0 1.889 1.889l3.1-3.1A2.673 2.673 0 0 0 7.57 3.287L4.2 6.657a4.009 4.009 0 0 0 5.669 5.669l3.1-3.1"/>
  </svg>
</template>

<script>
export default {
  name: "AttachSmall",
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