import { createApp } from 'vue'
import myRouter from './router/index'
import app from './app.vue'

createApp(app)
  .use(myRouter)
  .mount('#myapp')