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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 31.5h31M28.5 18.5v11a2 2 0 0 1-2 2h-14m5-21h-5a2 2 0 0 0-2 2v10"/><path d="M13.5 22.5V20a.5.5 0 0 1 .5-.5h3.5m-4 3h12m-12 0v3m12-3V20a.5.5 0 0 0-.5-.5h-3.5m4 3v3m-12 0V28a.5.5 0 0 0 .5.5h3.5m-4-3h12m0 0V28a.5.5 0 0 1-.5.5h-3.5m-4-9v9m0-9h4m-4 9h4m0-9v9M27.5 13.5l3 3M28.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/><path d="m26 9.5-2 2-1-1"/><path fill="currentColor" fill-opacity=".25" d="M2.5 26v5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5"/><path d="M4.5 25.5v-2a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v2M5.5 28.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke-opacity=".25" d="M31.5 13.5v-8a2 2 0 0 0-2-2h-13m-9 15h-5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h4"/><path d="M10.5 6.5 12 5m.5-4.5L11 2m0 0L9.5 3.5 12 5m-1-3 2.5 1.5L12 5M13.5 13.5h4"/></g>
  </svg>
</template>

<script>
export default {
  name: "WelcomeDatasheets",
  props: {
    width: {
      type: [String, Number],
      default: "32"
    },
    height: {
      type: [String, Number],
      default: "32"
    },
    viewBox: {
      type: String,
      default: "0 0 32 32"
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