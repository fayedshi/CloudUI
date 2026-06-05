<template>
  <Form :title="titleRef" :actionName="handleLogin" @updateUsername="update_username" @updatePassword="update_password"
    :username="usernameRef" :password="passwordRef" :status="statusRef" />
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Form from '@/components/Form.vue';


const titleRef = ref('登录');
const usernameRef = ref('');
const passwordRef = ref('');
console.log(usernameRef.value)
const router = useRouter();
const emit = defineEmits(['updateIsLoggedIn'])
const statusRef = ref();

const update_username = (val) => {
  // console.log('parent received ',val)
  usernameRef.value = val;
  // emit是单向的，不能回传
  // emit('recvUsername', val);
}

let update_password = (val) => {
  passwordRef.value = val;
}

const handleLogin = async () => {
  console.log('to submit', usernameRef.value, passwordRef.value, 'here')
  try {
    const response = await axios.post('http://localhost:8977/api/user/login', {
      username: usernameRef.value,
      password: passwordRef.value
    });
    if (response.data.code == 200) {
      // 存储token到localStorage或其他状态管理库
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      // window.location.reload();
      // update login status instantly
      emit('updateIsLoggedIn', true, usernameRef.value)
      // 跳转到首页
      router.push('/');// by component name or path

    } else {
      // alert('login failed, ' + response.data.message);
      statusRef.value = 'Login failed: ' + response.data.message;
    }
  } catch (error) {
    console.error('登录失败:', error);
    // alert('登录失败，请检查用户名和密码');
    statusRef.value = 'Error: ' + error;
  }
};
</script>

<style></style>
