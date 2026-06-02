<template>
  <div class="container">
    <h3>Cloud UI</h3>

    <!-- <p>
        You are in: {{ $route.fullPath }}
      </p> -->
    <nav v-if="!isLoggedIn" class="mainNavBar">
      <router-link to="/login">Sign In</router-link><span></span>
      <router-link to="/register">Sign Up</router-link>
    </nav>
    <nav class="mainNavBar" v-else>
      <router-link to="/dept">Dept List</router-link>
      <button @click="logout">Log Out</button>
    </nav>

    <main>
      <RouterView @updateIsLoggedIn="isLoggedIn=true" />
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';

let isLoggedIn = ref(false);

console.log(isLoggedIn.value)
const router = useRouter();

onMounted(() => {
  let userName = localStorage.getItem("username");
  isLoggedIn.value = userName != null;
})
let logout = () => {
  console.log("logging out");

  // localStorage.removeItem("username");
  // clear local storage
  localStorage.clear();
  isLoggedIn.value=false;
  // refresh the page
  // window.location.reload();
  router.push("/");
}

</script>

<style>
@import '@/styles.css';

.container {
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  /* border: 2px solid rgb(73, 110, 66); */
  padding-left: 10px;
  padding-right: 10px;
  background-color: beige;



  /* .content {
    width: 200px;
    height: 120px;
    margin-top: 10px;
    
    display: inline-block;
    vertical-align: top;
  } */

  /* .home {
    position: absolute;
    right: 10px
  } */

}

.container .mainNavBar {
  width: 50%;
  position: absolute;
  top: 0px;
  /* right: 10px; */
  /* bottom: 10px; */
  left: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
