<template>
    <div>
        <h2>Departments</h2>
        <!-- <div class="cont"> -->
        <ul class="dept-list">
            <li class="dept-item">
                <span>ID</span>
                <span>Dept Name</span>
                <span>Manager</span>
            </li>
            <li v-for="dept in deptData" :key="dept.id" class="dept-item">
                <span class="name">{{ dept.id }} </span>
                <span class="name">{{ dept.deptName }}</span>
                <span class="name">{{ dept.deptMgr }}</span>
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
    width: 70%;
    margin-left: 5%;
}

.dept-list {
    list-style: none;
    padding: 0;
}

.dept-item {
    display: flex;
    justify-content: space-between;
    /* padding: 8px 12px; */
    border-bottom: 1px solid #eee;
    margin-right: 30px;
}

.name {
    font-weight: bold;
    color: #333;
}
</style>