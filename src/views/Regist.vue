<template>
  <div class="register-container">
    <div class="register-form">
      <h1 class="register-title">新用户注册</h1>
      <el-form :model="formData" :rules="rules" ref="registerForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="formData.confirmPassword"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="zhuceanniu" type="primary" @click="handleSubmit(registerForm)">注册</el-button>
        </el-form-item>
      </el-form>
      <p class="yiyouzhanghao">已有账号？<router-link to="/login">去登录</router-link></p>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { useRouter } from 'vue-router';
import { usePageTitle } from '@/hooks/usePageTitle';
import  { registerUser }  from '@/api/user';
import { useUserStore } from '@/stores/user';
usePageTitle('注册');
const router = useRouter();

const userStore = useUserStore();
const userinfo = userStore.userinfo;
// 监听userinfo 变化  如果有值 说明登录成功了  跳转到首页 如果没有值 说明登录失败了  提示用户 重新登录  或者注册
watch(userinfo, (newVal) => {
  if (newVal) {
    router.push('/');
  }
},{immediate : true});
const registerForm = ref();

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  nickname: '',
});

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { pattern: /^[A-Za-z0-9_]+$/, message: '用户名只能包含字母、数字和下划线', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, max: 10, message: '密码长度应在5-10个字符之间', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { validator: checkPassword, trigger: 'blur' },
  ],
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
  ],
};

function checkPassword(rule, value, callback) {
  if (value === formData.value.password) {
    callback();
  } else {
    callback(new Error('两次输入的密码不一致'));
  }
}

function handleSubmit(formEl) {
  formEl.validate((valid) => {
    if (valid) {
      // 表单校验通过，执行注册逻辑
      registerUser(formData.value).then(() => {
        // 注册成功，跳转到登录页面
        router.push('/login');
      });
    } else {
      // 表单校验失败
    }
  });
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-form {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.yiyouzhanghao{
  text-align: center;
  margin-top: 20px;
}

.zhuceanniu{
  margin-left: 50px;
}

</style>
