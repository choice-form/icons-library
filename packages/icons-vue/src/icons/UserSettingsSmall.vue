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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 9.5H5a2 2 0 0 0-2 2v1M12.85 10.2l-.45-.15M9.6 8.95l-.45-.15M10.3 11.35l.15-.45M11.55 8.1l.15-.45M11.8 11.35l-.2-.5M10.4 8.15l-.2-.5M9.15 10.3l.5-.2M12.35 8.9l.5-.2"/></g>
  </svg>
</template>

<script>
export default {
  name: "UserSettingsSmall",
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