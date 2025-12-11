import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Ensure page starts at top on initial load
if (typeof window !== 'undefined') {
  window.scrollTo(0, 0)
}

createApp(App).use(router).mount('#app')
