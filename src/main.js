import { createApp } from 'vue'
import App from './App.vue'
import myUI from './lib/myUI';
import './lib/myUI/style/index.css'

const app = createApp(App)

app.use(myUI)
app.mount('#app')


