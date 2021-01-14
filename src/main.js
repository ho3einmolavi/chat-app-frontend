import { createApp } from 'vue'
import App from './App.vue'
import Toaster from '@meforma/vue-toaster';
import router from './router/index'

createApp(App).use(Toaster).use(router).mount('#app')
