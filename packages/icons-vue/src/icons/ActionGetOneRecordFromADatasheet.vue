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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 7.5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1M6.5 5.5h8"/><path fill="currentColor" fill-opacity=".25" d="M6.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path d="M8.5 10.5h2"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionGetOneRecordFromADatasheet",
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