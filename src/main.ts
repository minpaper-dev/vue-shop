import { createApp } from 'vue'
import './index.css'

import router from './router.js'
import App from './App.vue'
import store from './store.js'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount("#app")
// createApp(App).mount('#app')
