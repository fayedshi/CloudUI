<template>
  <div class="home-container">
    <div v-if="isLoggedIn" class="loggedIn">
      <p>Welcome <strong>{{ userName }} </strong></p>
      <router-link to="/dept">Check department data</router-link>
      <button @click="logout">log out</button>
    </div>
    
    <div v-else class="loggedout">
      <nav>
        <router-link to="/login">Sign In</router-link><span></span>
        <router-link to="/register">Sign Up</router-link>
      </nav>
    </div>
    <!-- <div class="home-router-view1"> -->
    <router-view></router-view>
    <!-- </div> -->

  </div>
</template>

<script setup>
// import { onMounted } from 'vue';
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';

let isLoggedIn = ref(false);
let userName = localStorage.getItem("username");
isLoggedIn.value = userName != null;
console.log(isLoggedIn.value)

const router = useRouter();
// onMounted(() => {

// })

let logout = () => {
  console.log("logging out");
  router.push("/");
  // localStorage.removeItem("username");
  // clear local storage
  localStorage.clear();
  // refresh the page
  window.location.reload();
}

</script>

<style scoped>
/* 添加你的CSS样式 */
.home-container {
  /* border: 1px solid rgb(158, 26, 42); */
  background-color: beige;
  /* position: relative; */
  display: inline-block;

  .loggedout,loggedIn
   {
    position: absolute;
    top: 10px;
    right: 10px;


    /* background-color: rgb(205, 115, 37); */
    /* text-align: right; */
    span {
      margin-left: 10px;
    }
  }
  
}

.home-router-view {
  position: absolute;
  /* margin: 30px auto;  */
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0;
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
</style>
