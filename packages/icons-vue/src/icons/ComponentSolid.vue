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
    <g fill="currentColor"><path d="M5.784 4.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM5.784 11.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM10.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372zM3.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372z"/></g>
  </svg>
</template>

<script>
export default {
  name: "ComponentSolid",
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