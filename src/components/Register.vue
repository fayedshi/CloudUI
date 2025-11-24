<template>
  <div class="register-container">
    <h1>注册</h1>
    <form @submit.prevent="register">
      <div>
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="passwd">密码:</label>
        <input type="password" id="passwd" v-model="passwd" required>
      </div>
      <button type="submit">注册</button>
    </form>
    <label>status: {{ status }}</label> 
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
// export default {
// data() {
//   return {
//     username: '',
//     passwd: '',
//     status: ''
//   };
// },
// setup() {
//   register() {
//     axios.post('http://localhost:8977/api/user/register', {
//       username: this.username,
//       passwd: this.passwd
//     })
//     .then(response => {
//       console.log(response.data);
//       this.status=response.data.Message;
//       // 注册成功后的处理逻辑
//       router.push({path: '/login'});
//     })
//     .catch(error => {
//       console.error(error);
//       // 处理错误情况
//     });
//   }
// }

const username = ref('');
const passwd = ref('');
const status = ref('');
const router = useRouter();

const register = async () => {
  try {
    const response = await axios.post('http://localhost:8977/api/user/register', {
      username: username.value,
      passwd: passwd.value
    });
    alert(response);
    // 假设后端返回了一个token
    if (response.data.Code == 200) {
      // 跳转到首页
      router.push('/login');
    } else {
      status.value = response.data.Message;
    }
  } catch (error) {
    console.error('failure:', error);
    // 显示错误消息给用户
    alert('failed');
  }
};
</script>

<style>
/* 添加你的CSS样式 */
.register-container {
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
