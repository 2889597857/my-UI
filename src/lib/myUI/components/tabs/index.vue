<template>
  <div>
    <div class="i-tabs-header">
      <div
        v-for="(item, index) in tablist"
        :key="index"
        :class="{
          'i-tabs-item': true,
          'is-active': item.name == tabName ? true : false,
        }"
        @click="changeTab(item.name)"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="i-tabs-content">
      <slot />
    </div>
  </div>
</template>

<script>
  import { onMounted, provide, ref } from 'vue'
  export default {
    name: "ITabs",
    emits: ['update:modelValue'],
    props: {
      modelValue: {
        type: [String, Number],
      },
    },
    setup (props) {
      const tabName = ref(props.modelValue)
      const tablist = ref([])
      const addTab = (tab) => {
        tablist.value.push(tab)
      }
      provide('addTab', addTab)
      function changeTab (name) {
        tabName.value = name
        showTab()
      }
      const showTab = () => {
        tablist.value.map(item => item.changeShow(item.name == tabName.value))
      }
      onMounted(() => {
        if (!tabName.value && tablist.value.length !== 0) {
          tabName.value = tablist.value[0].name
        }
        showTab()
      })
      return {
        changeTab, tablist, tabName
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
