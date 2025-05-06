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
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7.15 9.5H5.5a2 2 0 0 0-2 2v1M10.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12.5 12.5l-.95-.95"/></g>
  </svg>
</template>

<script>
export default {
  name: "UserSearchSmall",
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