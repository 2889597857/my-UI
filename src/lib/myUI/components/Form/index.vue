<template>
  <form class="I-form">
    <slot />
  </form>
</template>

<script>
  import {
    provide,
    getCurrentInstance
  } from 'vue'
  export default {
    name: 'IForm',
    props: {
      rules: {
        type: Object
      },
      model: {
        type: Object
      },
    },
    setup (props, { slots }) {
      const instance = getCurrentInstance()
      let a = []
      if (instance) {
        Object.assign(instance.proxy, {
          validate: (callback) => {

            Promise.all(
              a.filter(item => item.prop)
                .map(item => item.func(props.rules[item.prop], props.model[item.prop]))
            ).then(() => {
              callback(true)
            }).catch(() => {
              callback(false)
            })
          }
        })
      }

      const addItem = ({ prop, func }) => {
        a.push({ prop, func })
      }
      provide('addItem', addItem)
      provide('rules', props.rules)

    },

  }
</script>

<style lang="scss" scoped>
  .I-form {
    width: 270px;
    margin: 0 auto;
  }
</style>