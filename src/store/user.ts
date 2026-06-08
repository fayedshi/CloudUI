import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore('user', () => {
    
    const username = ref(localStorage.getItem('username') as string | null);
    const token = ref(localStorage.getItem('token') as string | null);

    let setUsername = (value: string) => {
        username.value = value;
        console.log('this.username', username.value)
    }

    let setToken = (val: string) => {
        token.value = val;
        console.log('user.ts token', token.value);
    }

    let isLoggedIn = computed(() => !!token.value)
    console.log('in user.ts', isLoggedIn);
    return { username, token, setUsername, setToken, isLoggedIn }
}
)