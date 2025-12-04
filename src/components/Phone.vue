<template>
    <div class=".phoneInfo">
        姓名:<input v-model="weight" /> {{ weight }}
        薪水:<input type="number" v-model="price" /> {{ price }}
    </div>
</template>

<script lang="ts">
export default {
    name: "myPhone"
}
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';

let weight = ref('32')
let price = ref(15000)
// expose the properties of the component to main component
defineExpose({ weight, price })

onMounted(() => {
    console.log("mounted");
})

</script>

<style scoped>
.phoneInfo {
    background-color:aqua;
    widows: 80%;
}

.phoneInfo span {
    background-color: yellow;
    margin-left: 10px;
    border: 1px;
    border-radius: 5px;
}
</style>