<template>
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
</template>

<script>
  import { reactive, ref, toRefs } from "vue";
  export default {
    setup () {
      const state = reactive({
        ruleForm: {
          acc: '',
          psw: '',
          age: ''
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

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 40vw;
    margin: 60px auto;
  }
  * {
    padding: 0;
    margin: 0;
  }
</style>