<template>
  <ul class="dot-wrapper">
    <li
      v-for="item in itemLen"
      :key="item"
      :class="{ 'is-active': item - 1 == currentIndex ? true : false }"
    >
      <a href="javascript:;" @click="dotClick(item - 1)"></a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      itemLen: {
        type: Number
      },
      currentIndex: {
        type: Number
      }
    },
    setup (props, { emit }) {
      const dotClick = index => {
        emit('dotClick', index)
      }
      return {
        dotClick
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dot-wrapper {
    border-radius: 10px;
    position: absolute;
    height: 18px;
    left: 50%;
    bottom: 15px;
    text-align: center;
    font-size: 0;
    margin-left: -39px;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 100;

    li {
      display: inline-block;
      margin: 5px;
      a {
        display: block;
        padding-top: 8px;
        width: 8px;
        height: 0;
        border-radius: 50%;
        background: #fff;
      }
    }
    .is-active {
      a {
        background: #ff5000;
      }
    }
  }
</style>