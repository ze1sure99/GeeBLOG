<template>
  <div class="register-form-wrapper">
    <h2 class="title">新用户注册</h2>
    <el-form ref="registerForm" :model="form" :rules="rules" label-width="80px" class="register-form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input v-model="form.confirmPassword" type="password" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="form.nickname" placeholder="请输入昵称"></el-input>
      </el-form-item>
      <el-form-item class="el-form-item-content">
        <el-button type="primary" @click="submitForm">注册</el-button>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <router-link to="/login">已有账号？去登录</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  },
  setup() {
    const form = ref({
      username: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    });

    const rules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 10, message: '密码长度在5-10个字符之间', trigger: 'blur' },
      ],
      confirmPassword: [
        { required: true, message: '请确认密码', trigger: 'blur' },
        {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== form.value.password) {
              callback(new Error('两次输入密码不一致'));
            } else {
              callback();
            }
          },
          trigger: 'blur',
        },
      ],
      nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
    };

    const submitForm = () => {
      const registerForm = ref.value;
      registerForm.validate((valid) => {
        if (valid) {
          console.log('submit');
        } else {
          console.log('error submit');
          return false;
        }
      });
    };

    return {
      form,
      rules,
      submitForm,
    };
  },
};
</script>

<style scoped>
.register-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.register-form {
  width: 400px;
  margin: 0 auto;
}
.el-form-item-content{
  margin-left: 50px ;
}
</style>

