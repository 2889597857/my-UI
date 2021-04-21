<template>
  <div class="form">
    <I-form :rules="rules" :model="ruleForm" ref="Iform">
      <I-form-item label="账号 : " prop="acc">
        <I-input
          type="text"
          clearable
          v-model="ruleForm.acc"
          placeholder="请输入账号"
        />
      </I-form-item>
      <I-form-item label="密码 : " prop="psw">
        <I-input
          type="password"
          placeholder="请输入密码"
          clearable
          v-model="ruleForm.psw"
        />
      </I-form-item>
      <I-button @click="submitForm">登录</I-button>
    </I-form>
  </div>
</template>

<script>
  import Iform from './index.vue'
  import IFormItem from '../formItem/index.vue'
  import IInput from '../Input/index.vue'
  import IButton from '../button/index.vue'
  import { ref, toRefs, reactive } from 'vue'
  export default {
    components: { Iform, IFormItem, IInput, IButton },
    setup () {
      const state = reactive({
        ruleForm: {
          acc: '',
          psw: '',
        },
        rules: {
          acc: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          psw: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }

      })
      const Iform = ref(null)
      const submitForm = () => {
        Iform.value.validate(a => {
          if (a) {
            alert('登录成功')
          }
        })
      }
      return {
        ...toRefs(state),
        Iform, submitForm
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form {
    box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
    border-radius: 10px;
    width: 300px;
    height: 200px;
    padding: 10px 0;
  }
</style>