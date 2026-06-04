<template>
  <div class="container">
    <div class="title">
      <div>Cloud UI</div>
      <span>
        Current path: {{ $route.fullPath }}
      </span>
      <div v-if="isLoggedIn">
        <span>Welcome
          <span>{{ userName }} </span>
        </span>
        <button @click="logout">Log Out</button>
      </div>
    </div>

    <nav v-if="!isLoggedIn">
      <router-link to="/login">Sign In</router-link><span></span>
      <router-link to="/register">Sign Up</router-link>
    </nav>


    <main class="routerView">
      <!-- <nav class="mainNavBar"> -->
      <router-link v-if="isLoggedIn" to="/dept">Dept List</router-link>
      <!-- </nav> -->
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
console.log('in setup()')

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
  margin-top: 10px;
}

.container .title>div:nth-child(1) {
  width: fit-content;
  font-size: 25px;
  color: rgb(212, 212, 18);
}

.container .title>div:nth-child(3) {
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  align-items: flex-end;
  button{
    height: 30px;
  }
}


div span>span {
  font-weight: bold;
  font-style: italic;
  color: rgb(223, 24, 30);
  margin-right: 10px;
}

.container nav {
  width: 75%;
  position: absolute;
  top: 10px;
  left: 24%;
  right: 10px;
  display: flex;
  justify-content: flex-end;


  span {
    margin-right: 10px;
  }
}

.container .routerView {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;

}

/* .routerView :last-child {
  margin-left: 100px;
  width: 80%;
} */
</style>
