<template>
  <div class="director director-next" v-if="dir == 'next'">
    <a href="javascript:;" @click="dirClick(dir)">&gt;</a>
  </div>
  <div class="director director-prev" v-else-if="dir == 'prev'">
    <a href="javascript:;" @click="dirClick(dir)">&lt;</a>
  </div>
</template>

<script>
  export default {
    props: {
      dir: {
        type: String
      }
    },
    setup (props, { emit }) {
      const dirClick = dir => {
        emit('dirClick', dir)
      }
      return {
        dirClick
      }
    }
  }
</script>

