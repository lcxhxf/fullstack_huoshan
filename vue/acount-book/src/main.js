import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
    button, Tabbar, TabbarItem
} from 'vant'
import 'vant/lib/index.css';
import 'lib-flexible/flexible'

const app = createApp(App)
app.use(router)
app.use(button)
app.use(Tabbar)
app.use(TabbarItem)

app.mount('#app')

