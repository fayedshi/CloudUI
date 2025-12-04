import { createApp } from 'vue'
import myRouter from './router/index'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import app from './app.vue'

const pinia=createPinia();
const myApp= createApp(app);
myApp.use(myRouter);
myApp.use(pinia);
myApp.use(ElementPlus);
myApp.mount('#myapp');