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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.592 12.5a1.491 1.491 0 0 0 2.816 0M2.5 10.5h11M13.5 10.5a2.15 2.15 0 0 1-2-2V6a3.5 3.5 0 1 0-7 0v2.5a2.15 2.15 0 0 1-2 2"/></g>
  </svg>
</template>

<script>
export default {
  name: "AlarmSmall",
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