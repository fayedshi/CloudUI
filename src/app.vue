<template>
  <h1>Cloud UI</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
  <p>
    <strong>You are in:</strong> {{ $route.fullPath }}
  </p>
  <main>
    <RouterView />
  </main>


  <!-- <myPhone ref="phoneRef"></myPhone> -->
  <!-- <button @click="showPhone"></button> -->
</template>

<script setup lang="ts">
// import { ref } from "vue";
// import myPhone from "./components/Phone.vue";

// let phoneRef= ref();
// console.log(phoneRef.value.name);
// function showPhone(){
//   console.log(phoneRef.value.salary);
// }
</script>
