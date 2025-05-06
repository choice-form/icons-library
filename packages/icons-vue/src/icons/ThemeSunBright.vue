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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 7.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0M7.5 1.5v1m0 10v1m5-6h1m-11 0h-1M11.743 3.257l-.707.707m-7.072 7.072-.707.707m7.779-.707.707.707M3.964 3.964l-.707-.707"/></g>
  </svg>
</template>

<script>
export default {
  name: "ThemeSunBright",
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