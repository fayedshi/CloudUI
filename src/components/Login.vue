<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="passwd">密码:</label>
        <input type="password" id="passwd" v-model="passwd" required>
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const passwd = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:8977/api/user/login', {
      username: username.value,
      passwd: passwd.value
    });
    alert(response);
    // 假设后端返回了一个token
    if(response.data.principal){
        const token = response.data.token;
        // 存储token到localStorage或其他状态管理库
        localStorage.setItem('token', token);
        // 跳转到首页
        router.push('/');
    }else{
        alert('登录失败，'+response.data.Message);
    }
  } catch (error) {
    console.error('登录失败:', error);
    // 显示错误消息给用户
    alert('登录失败，请检查用户名和密码');
  }
};
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3a9a6e;
}
</style>
