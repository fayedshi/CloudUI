<template>
  <div class="container">
    <div class="title">
      <div>Cloud UI</div>
      <span>
        current path: {{ $route.fullPath }}
      </span>
      <div>
        <span v-if="isLoggedIn">Welcome
          <span>{{ userName }}</span>
        </span>
      </div>
    </div>

    <nav v-if="!isLoggedIn" class="mainNavBar">
      <router-link to="/login">Sign In</router-link><span></span>
      <router-link to="/register">Sign Up</router-link>
    </nav>
    <nav class="mainNavBar" v-else>
      <router-link to="/dept">Dept List</router-link>
      <button @click="logout">Log Out</button>
    </nav>

    <main class="routerView">
      <RouterView @updateIsLoggedIn="updIsLoggedIn" />
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';

let isLoggedIn = ref(false);
console.log(isLoggedIn.value)
const router = useRouter();
let userName = ref();

onMounted(() => {
  console.log('main onmounted isloggIn ', isLoggedIn.value);
  userName.value = localStorage.getItem("username");
  isLoggedIn.value = userName.value != null;
})

const updIsLoggedIn = (val1, val2) => {
  isLoggedIn.value = val1;
  userName.value = val2;
}

let logout = () => {
  console.log("logging out");
  // clear local storage
  localStorage.clear();
  isLoggedIn.value = false;
  router.push("/");
}

</script>

<style>
@import '@/styles.css';

.container {
  position: absolute;
  font-size: 20px;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  /* border: 2px solid rgb(73, 110, 66); */
  padding-left: 10px;
  padding-right: 10px;
  background-color: beige;
}

.container .title {
  /* text-align: right; */
  font-size: 25px;
  /* color:rgb(163, 21, 21); */
  margin-top: 10px;


}

.container .title>div:nth-child(1) {
  width: fit-content;
  color: rgb(212, 212, 18);
}

.container .title>div:nth-child(3) {
  position: absolute;
  top: 10px;
  right: 10px;
  width: fit-content;
  /* color: rgb(212, 212, 18); */
}


div span>span {
  font-weight: bold;
  font-style: italic;
  color: rgb(223, 24, 30)
}

.container .mainNavBar {
  width: 50%;
  position: absolute;
  top: 10px;
  /* right: 10px; */
  /* bottom: 10px; */
  left: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.container .routerView {
  margin-left: 25%;
  margin-right: 25%;
}
</style>
