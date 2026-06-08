<template>
    <div>
        <ul>
            <li class="row">
                <span>ID</span>
                <span>Dept Name</span>
                <span>Manager</span>
            </li>
            <hr>
            <li v-for="dept in deptData" :key="dept.id" class="dept-item">
                <span>{{ dept.id }} </span>
                <span>{{ dept.deptName }}</span>
                <span>{{ dept.deptMgr }}</span>
            </li>
        </ul>
    </div>
    <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue'

const deptData = ref();
const error = ref();

onMounted(() => {
    fetchDeptData();
}
);

const fetchDeptData = async () => {
    try {
        const headers = {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json'
        };
        const response = await axios.get('http://localhost:8977/portal/list', { headers });
        deptData.value = response.data;
    } catch (err) {
        error.value = err;
    }
};
</script>

<style scoped>
div:first-of-type {
    width: 50%;
    margin: 0 auto;
}

.row {
    font-weight: bold;
}

.dept-item,
.row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}
</style>