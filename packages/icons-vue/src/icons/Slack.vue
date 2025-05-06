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
    <mask id="a" width="16" height="16" x="0" y="0" mask-type="luminance" maskUnits="userSpaceOnUse"><path fill="#fff" d="M16 0H0v16h16z"/></mask><g fill="currentColor" mask="url(#a)"><path d="M6.044.667a1.467 1.467 0 0 0 0 2.933h1.467V2.133A1.467 1.467 0 0 0 6.044.667M6.044 4.578h-3.91a1.467 1.467 0 0 0 0 2.933h3.91a1.467 1.467 0 1 0 0-2.933M15.333 6.045a1.467 1.467 0 1 0-2.933 0V7.51h1.467a1.467 1.467 0 0 0 1.466-1.466M11.422 6.045V2.133a1.467 1.467 0 1 0-2.933 0v3.911a1.467 1.467 0 0 0 2.933 0M9.955 15.333a1.467 1.467 0 0 0 0-2.933H8.49v1.467a1.467 1.467 0 0 0 1.466 1.466M9.955 11.422h3.912a1.467 1.467 0 0 0 0-2.933H9.955a1.467 1.467 0 0 0 0 2.933M.667 9.955a1.467 1.467 0 1 0 2.933 0V8.49H2.133A1.467 1.467 0 0 0 .667 9.955M4.578 9.955v3.912a1.467 1.467 0 1 0 2.933 0V9.955a1.467 1.467 0 0 0-2.933 0"/></g>
  </svg>
</template>

<script>
export default {
  name: "Slack",
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