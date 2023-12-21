import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import App from './App.vue'
import App2 from './App2.vue'

library.add(fas)
import './styles/index.css'
// console.log(App.render?.toString())
createApp(App2)
.mount('#app')
