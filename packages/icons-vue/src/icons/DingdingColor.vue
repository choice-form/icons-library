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
    <path fill="#3296FA" d="M12.4 2H3.6A1.6 1.6 0 0 0 2 3.6v8.8A1.6 1.6 0 0 0 3.6 14h8.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 12.4 2m-1.265 4.992q-.022.089-.094.25l-.007.007c-.283.599-1.011 1.772-1.011 1.772l-.007-.006-.216.37h1.031L8.864 12l.445-1.78H8.5l.283-1.18a9 9 0 0 0-.815.236s-.432.25-1.24-.485c0 0-.546-.485-.23-.6.135-.053.655-.114 1.065-.168.552-.074.896-.115.896-.115s-1.704.027-2.108-.04c-.405-.06-.917-.742-1.025-1.335 0 0-.168-.323.364-.169.526.155 2.737.6 2.737.6s-2.872-.874-3.06-1.09-.56-1.172-.513-1.76c0 0 .02-.148.169-.107 0 0 2.116.97 3.565 1.497 1.456.539 2.716.808 2.547 1.488"/>
  </svg>
</template>

<script>
export default {
  name: "DingdingColor",
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