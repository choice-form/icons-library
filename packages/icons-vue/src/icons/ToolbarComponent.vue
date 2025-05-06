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
    <g stroke="currentColor"><path d="m8.354.854 2.292 2.292a.5.5 0 0 1 0 .708L8.354 6.146a.5.5 0 0 1-.708 0L5.354 3.854a.5.5 0 0 1 0-.708L7.646.854a.5.5 0 0 1 .708 0ZM8.354 9.854l2.292 2.292a.5.5 0 0 1 0 .708l-2.292 2.292a.5.5 0 0 1-.708 0l-2.292-2.292a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0ZM15.146 8.354l-2.292 2.292a.5.5 0 0 1-.708 0L9.854 8.354a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708ZM6.146 8.354l-2.292 2.292a.5.5 0 0 1-.708 0L.854 8.354a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708Z"/></g>
  </svg>
</template>

<script>
export default {
  name: "ToolbarComponent",
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