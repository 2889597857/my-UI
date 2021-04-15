<template>
  <div class="I-input" v-focus>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      autocomplete="off"
      @input="onInput"
      @blur="onBlur"
    />
    <span class="icon">
      <i class="iconfont"></i>
      <slot name="icon" />
    </span>
  </div>
</template>

<script>
  import { inject, onMounted, reactive, toRefs } from 'vue'
  import { focus } from '../../directives';
  export default {
    name: "IInput",
    directives: {
      focus
    },
    props: {
      modelValue: {
        required: false
      },
    },
    setup (prop, { emit, attrs }) {
      const state = reactive({
        type: attrs.type,
        placeholder: attrs.placeholder,
      })
      let FormItem
      const onBlur = () => {
        if (FormItem) {
          FormItem.handleBlur(prop.modelValue)
        }
      }
      const onInput = (e) => {
        const value = e.target.value
        if (value !== prop.modelValue) {
          emit('update:modelValue', value);
          if (FormItem) {
            FormItem.handleChange(value)
          }
        }
      }
      onMounted(() => {
        if (inject('FormItem')) {
          FormItem = inject('FormItem')
        } else {
          FormItem = false
        }
      })
      return {
        ...toRefs(state),
        onBlur,
        onInput
      }
    }
  }
</script>

