import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query';

import './index.css'

import router from './router'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueQueryPlugin)

app.mount("#app")
