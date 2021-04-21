<template>
  <div :class="{ 'form-item': true, error: errMsg }">
    <label class="item-label">{{ label }}</label>
    <slot />
    <span class="item-error">{{ errMsg }}</span>
  </div>
</template>

<script>
  import { inject, onMounted, provide, reactive, ref, toRefs } from 'vue'
  import Schema from 'async-validator';

  export default {
    name: "IFormItem",
    props: ['prop'],
    setup (props, ctx) {
      const state = reactive({
        label: ctx.attrs.label
      })
      const errMsg = ref('')
      const rule = inject('rules')[props.prop]
      const addItem = inject('addItem')
      const handleChange = (value) => {
        validate(getRules('change'), value).catch(() => { })
      }
      const handleBlur = (value) => {
        validate(getRules('blur'), value).catch(() => { })
      }
      provide('FormItem', { handleChange, handleBlur })
      const getRules = (trigger) => {
        if (rule) {
          const ruleArr = Array.isArray(rule) ? rule : [rule]
          if (trigger) {
            return ruleArr.filter(item => item.trigger === trigger);
          }
          return ruleArr;
        }
        return []
      }

      const validate = (rules, value) => {
        if (rules.length && props.prop) {
          const schema = new Schema({ [props.prop]: rules });
          return schema.validate({ [props.prop]: value }).then(() => {
            errMsg.value = '';
            return true
          }).catch(({ errors }) => {
            errMsg.value = errors[0].message;
            return Promise.reject(errors);
          })
        }
        return Promise.resolve(true);
      }

      onMounted(() => {
        addItem({
          prop: props.prop,
          func: validate
        })
      })
      return {
        ...toRefs(state), errMsg
      }
    }
  }
</script>