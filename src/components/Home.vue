<template>
  <div>
    <!-- <h1>My Mini Site</h1> -->

    <div v-if="ind">
      <p>Welcome <strong>{{ userName }} </strong></p>
      <div><router-link to="/dept">Check department data</router-link></div>
      <button v-on:click="logout">log out</button>
    </div>

    <nav v-else>
      <ul>
        <li><router-link to="/login">Sign in</router-link></li>
        <li><router-link to="/register">sign up</router-link></li>

      </ul>
    </nav>
    <!-- <button v-on:click="showDept">Show department data</button> -->

  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let ind = ref(false);
let userName = localStorage.getItem("username");
ind.value = userName ? true : false;

const router = useRouter();
onMounted(() => {
  console.log("mounted");
})

function logout() {
  console.log("logging out");
  router.push("/");
  // localStorage.removeItem("username");
  // clear local storage
  localStorage.clear();
  // refresh the page
  window.location.reload();
}

</script>

<style>
/* 添加你的CSS样式 */
button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
