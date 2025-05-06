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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 4.5v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2m-2 1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.5 10.5h-4m2 2v-4M4.5 7.5h.005m-.005 2h.005m-.005 2h.005M9.5 3.5h.005m1.995 0h.005"/></g>
  </svg>
</template>

<script>
export default {
  name: "OrganizationAdd",
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