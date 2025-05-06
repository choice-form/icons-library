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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 5.5h4"/><path fill="currentColor" fill-opacity=".25" d="M10.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10.5 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path d="M1.5 10.5h5m0 0-2-2m2 2-2 2M12.5 7.5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1m0-4v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1"/></g>
  </svg>
</template>

<script>
export default {
  name: "ActionGetOneRecordFromLinkedRecords",
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