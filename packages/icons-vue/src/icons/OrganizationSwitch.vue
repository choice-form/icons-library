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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5H6A2.5 2.5 0 0 0 7.5 8m-2-.5H4A2.5 2.5 0 0 0 2.5 12"/><path d="m6.5 10.5-2 2 2 2M3.5 5.5l2 2-2 2M7.5 5.5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3M9.5 5.5h.005m-.005-2h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005"/></g>
  </svg>
</template>

<script>
export default {
  name: "OrganizationSwitch",
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