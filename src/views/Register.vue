<template>
  <div class="register-container">
    <h2>注册</h2>
    <form @submit.prevent="register">
      <div class="username">
        <p>用户名:</p>
        <input type="text"  v-model="username" required>
      </div>
      <div class="password">
        <p>密码:</p>
        <input type="password"  v-model="password" required>
      </div>
      <button type="submit">提交</button>
    </form>
    <label>{{ status }}</label>
    <!-- <button v-on:click="changeStatus"></button> -->
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const status = ref('');
const router = useRouter();

const register = async () => {
  try {
    const response = await axios.post('http://localhost:8977/api/user/register', {
      username: username.value,
      password: password.value
    });

    status.value = response.data.Message;
    if (response.data.Code == 200) {
      // navigate to login page
      status.value += ', Navigate to login page in 3 seconds...';
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }
  } catch (error) {
    console.error('failure:', error);
    // 显示错误消息给用户
    alert('failed' + error);
  }
}
</script>

<style>

label {
  display: block;
  margin-bottom: 5px;
}

</style>
