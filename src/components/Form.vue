<template>
  <div class="form-container">
    <h2>{{ title }}</h2>
    <form @submit.prevent="actionName">
      <div class="username">
        <p>用户名:</p>
        <!-- <input type="text" @recvUsername="getUsername" :value='usernameRef' @keyup="sendUserName" required> -->
        <input type="text" :value='username' @keyup="sendUsername" required>
      </div>
      <div class="password">
        <p>密码:</p>
        <input type="password" :value='password' @keyup="sendPassword" required>
      </div>
      <button type="submit">提交</button>
    </form>
    <label>{{ status }}</label>
  </div>
</template>

<script setup>
import { defineEmits, toRef, watch } from 'vue';
const x = defineProps(['title', 'actionName', 'username', 'password', 'status'])
// console.log('x',x)
const emitter = defineEmits(['enter-username', 'enter-password'])


let sendUsername = (e) => {
  // console.log('event', e.target.value);
  emitter('enter-username', e.target.value);
}

let sendPassword = (e) => {
  emitter('enter-password', e.target.value);
}

// watch if username updated from parent component
let watchedName = toRef(x, 'username');
watch(watchedName, (newVal, oldVal) => {
  // console.log('username changed ', oldVal, newVal);
})
</script>

<style>
h2 {
  text-align: center;
}

label {
  display: block;
  margin-top: 15px;
  color: red;
}
</style>
