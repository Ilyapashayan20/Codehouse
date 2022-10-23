import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from './store'
import VueNumber from 'vue-number-animation'


 
let app;

store.dispatch("user/onAuthChange",()=>{
  
   if(!app){
      app =createApp(App)
      app.use(store)
      .use(router)
      .use(Toast)
      .use(VueNumber)
   app.mount('#app')
   app.AOS = new AOS.init()
   }
})

