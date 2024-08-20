import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { addAppGlobalProperties } from './plugins/appGlobalProperties.js'
import App from './App.vue'
import router from './router'

import '../src/assets/scss/style.scss'
import '../src/assets/scss/menu.scss'
import '../src/assets/scss/game.scss'
import '../src/assets/scss/categories.scss'
import '../src/assets/scss/modal-window.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

addAppGlobalProperties(app)

app.mount('#app')