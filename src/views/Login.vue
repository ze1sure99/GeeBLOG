<template>
  <div class="login-container">
    <div class="login-form">
      <h1 class="login-title">用户登录</h1>
      <el-form :model="formData" :rules="rules" ref="loginForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="dengluanniu" type="primary" @click="handleSubmit(loginForm)">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="meiyouzhanghao">没有账号？<router-link to="/regist">去注册</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { ref , watch} from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { useRouter } from 'vue-router';
import { usePageTitle } from '@/hooks/usePageTitle';
import { loginUser } from '@/api/user';
import { useUserStore } from '@/stores/user';
const router = useRouter();
// 修改标题
usePageTitle('登录');
// 监听userinfo 变化  如果有值 说明登录成功了  跳转到首页 如果没有值 说明登录失败了  提示用户 重新登录  或者注册
  const userStore = useUserStore();
  const userinfo = userStore.userinfo;
  // 监听userinfo.username
  watch(userinfo, (newVal) => {
    if (newVal) {
      router.push('/');
    }
  },{immediate : true});

// 定义loginForm
const loginForm = ref();
const formData = ref({
  username: '',
  password: '',
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
};

 function handleSubmit( formEl ) {
  // 打印loginForm
  // console.log(loginForm);
  // loginForm和formEl是同一个对象
  formEl.validate((valid) => {
    if (valid) {
      // 执行user.js中的loginUser方法
       loginUser(formData.value).then((res) => {
        // 登录成功后，将token存储到localStorage中
        localStorage.setItem('token', res.data.token);
        // 跳转到首页
        router.push('/');
      });
    }else {
      return false;
    }
  });
}
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}
.dengluanniu{
  margin-left: 60px;
}
.meiyouzhanghao{
  text-align: center;
  margin-top: 20px;
}
</style>
