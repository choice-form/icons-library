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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 15.5h14"/><path fill="currentColor" d="M11.56.854a1.5 1.5 0 0 0-2.12 0l-.586.585a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .707 0l.585-.585a1.5 1.5 0 0 0 0-2.122zM11.146 6.56a.5.5 0 0 0 0-.706l-3-3a.5.5 0 0 0-.707 0L1.842 8.45a1.5 1.5 0 0 0-.394.696L.515 12.88a.5.5 0 0 0 .606.606l3.732-.933a1.5 1.5 0 0 0 .696-.394z"/>
  </svg>
</template>

<script>
export default {
  name: "ToolbarCreateSolid",
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