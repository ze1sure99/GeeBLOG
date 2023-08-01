import './assets/main.css'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)


for (const i in ElementPlusIconsVue) {
    app.component(i, ElementPlusIconsVue[i])
}

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
