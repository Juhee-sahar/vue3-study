import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import store from './store'

import './assets/main.css'

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
// app.config.globalProperties.$store = store;

app.use(router)
app.use(store)

app.mount('#app')
