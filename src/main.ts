import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import { Icon, Search } from 'vant'

const app = createApp(App)

app.use(router)
app.use(Icon)
app.use(Search)

const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'

app.mount('#app')
