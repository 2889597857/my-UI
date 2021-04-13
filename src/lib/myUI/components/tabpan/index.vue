<template>
  <div class="i-tab-pane" v-show="show">
    <slot />
  </div>
</template>

<script>
  import { inject, onMounted, ref } from 'vue'
  export default {
    name: "ITabPane",
    props: {
      name: {
        type: String
      },
      label: {
        type: String
      }
    },
    setup (props) {
      const show = ref(false)
      const changeShow = (isshow) => {
        show.value = isshow
      }
      const addTab = inject('addTab')
      onMounted(() => {
        addTab({
          label: props.label,
          name: props.name,
          changeShow
        })
      })
      return { show }
    }
  }
</script>
    