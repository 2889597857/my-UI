<template>
  <button class="I-button" type="button">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'IButton',
    props: {
      size: {
        type: String
      }
    }
  }
</script>