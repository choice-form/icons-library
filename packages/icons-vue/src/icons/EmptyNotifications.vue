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
    <g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M.5 13.5h14s-2.5-1.5-3-4c-.413-2.063-1.506-3.445-3-3.865V5.5a1 1 0 0 0-2 0v.135c-1.494.42-2.587 1.802-3 3.865-.5 2.5-3 4-3 4"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M9.5 13.5a2 2 0 1 1-4 0z"/></g>
  </svg>
</template>

<script>
export default {
  name: "EmptyNotifications",
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