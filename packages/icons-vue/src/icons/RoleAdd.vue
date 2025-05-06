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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.793 9.793 9 9l-1.5 1.5h-1v1h-1v1l-1 1h-2v-2L7 7l-.793-.793a1 1 0 0 1 0-1.414l1.879-1.879a2 2 0 0 1 2.828 0L13.5 5.5a1.414 1.414 0 0 1 0 2M9.5 4.5l2 2M14.5 11.5h-4m2 2v-4"/></g>
  </svg>
</template>

<script>
export default {
  name: "RoleAdd",
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