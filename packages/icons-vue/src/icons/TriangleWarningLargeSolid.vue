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
    <path fill="currentColor" d="M15.8 12.526 9.483.88A1.67 1.67 0 0 0 8.8.2a1.693 1.693 0 0 0-2.284.68L.2 12.526A1.678 1.678 0 0 0 1.686 15h12.628a1.7 1.7 0 0 0 1.308-.615 1.67 1.67 0 0 0 .178-1.859M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1-3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  </svg>
</template>

<script>
export default {
  name: "TriangleWarningLargeSolid",
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