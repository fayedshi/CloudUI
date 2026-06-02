<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div class="username">
        <p>用户名:</p>
        <input type="text" v-model="username" required>
      </div>
      <div class="password">
        <p>密码:</p>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
console.log(password.value)
const router = useRouter();
const emit = defineEmits(['updateIsLoggedIn'])

const handleLogin = async () => {
  console.log('to submit', password.value, 'here')
  try {
    const response = await axios.post('http://localhost:8977/api/user/login', {
      username: username.value,
      password: password.value
    });


    if (response.data.code == 200) {
      // 存储token到localStorage或其他状态管理库
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      // 跳转到首页
      // window.location.reload();
      emit('updateIsLoggedIn',true)
      router.push('/');// component name or path
      
    } else {
      alert('login failed, ' + response.data.message);
    }
  } catch (error) {
    console.error('登录失败:', error);
    // 显示错误消息给用户
    alert('登录失败，请检查用户名和密码');
  }
};
</script>

<style>
h2 {
  text-align: center;
}

label {
  display: block;
  margin-bottom: 5px;
}
</style>
