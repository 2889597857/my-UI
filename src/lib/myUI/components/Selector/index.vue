<template>
  <selectot
    ref="Iselectot"
    v-model="inputValue"
    :placeholder="props.placeholder"
  >
    <ul class="selector-content">
      <li v-for="item in options" :key="item" @click="clickLI(item)">
        <span>
          {{ item.label }}
        </span>
      </li>
    </ul>
  </selectot>
</template>

<script setup>
  import { defineProps, ref, toRefs } from 'vue'
  import selectot from './selectot.vue'
  const props = defineProps({
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: {
      type: String
    }
  })
  const clickLI = (item) => {
    inputValue.value = item.label
    Iselectot.value.hideContent()
  }
  let inputValue = ref('')
  const { options, value } = toRefs(props)
  inputValue.value = value.value
  const Iselectot = ref(null)

</script>

<style lang="scss" scoped>
  .selector-content {
    padding: 5px 0;
    li {
      font-size: 14px;
      padding: 0 20px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #606266;
      height: 34px;
      line-height: 34px;
      cursor: pointer;
      text-align: left;
      &:hover {
        background-color: #f5f7fa;
      }
    }
  }
</style>