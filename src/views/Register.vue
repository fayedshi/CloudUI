<template>
  <Form :title="titleRef" :actionName="handleRegister" @enter-username="recvUsername" @enter-password="recvPassword"
    :username="usernameRef" :password="passwordRef" :status="statusRef" />
</template>



<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Form from '@/components/Form.vue';


const titleRef = ref('注册');
const usernameRef = ref('');
const passwordRef = ref('');
const statusRef = ref('');
const router = useRouter();

const recvUsername = (val) => {
  // console.log('parent received ',val)
  usernameRef.value = val;
  // emit是单向的，不能回传
  // emit('recvUsername', val);
}

let recvPassword = (val) => {
  passwordRef.value = val;
}


const handleRegister = async () => {
  try {
    console.log('To submit', usernameRef.value, passwordRef.value, 'here')
    const response = await axios.post('http://localhost:8977/api/user/register', {
      username: usernameRef.value,
      password: passwordRef.value
    });

    statusRef.value = response.data.Message;
    if (response.data.Code == 200) {
      // navigate to login page
      statusRef.value += ', Navigate to login page in 3 seconds...';
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }
  } catch (error) {
    console.error('failure:', error);
    // 显示错误消息给用户
    alert('failed' + error);
    statusRef.value = 'Error: ' + error;
  }
}
</script>

<style>

</style>
