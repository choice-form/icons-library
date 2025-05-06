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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 9a4.5 4.5 0 0 0 8.247 2.493C6.5 11.493 3.5 7.5 6.253 4.507 3.711 4.367 1.5 6.449 1.5 9M7.5 2.5h2m-1-1v2M11.5 4.5v4m-2-2h4"/></g>
  </svg>
</template>

<script>
export default {
  name: "ThemeMoonDark",
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