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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m8.151 10.401.717 1.425a1.151 1.151 0 0 1-2.047 1.048L4.576 8.5"/><path d="M12.5 10.5s-2.952-2-4.976-2H4.5a2 2 0 1 1 0-4h3.024c1.976 0 4.976-2 4.976-2z"/></g>
  </svg>
</template>

<script>
export default {
  name: "Megaphone",
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