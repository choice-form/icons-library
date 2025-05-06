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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5v1m0 8v1M3.965 3.965l.705.705m5.66 5.66.705.705M2.5 7.5h1m8 0h1m-7.83 2.83-.705.705m7.07-7.07-.705.705M9.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  </svg>
</template>

<script>
export default {
  name: "EffectsSettings",
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