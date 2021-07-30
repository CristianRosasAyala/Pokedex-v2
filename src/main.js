import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import VueButtonAnimation from 'vue-button-animation'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'


import InputText from 'primevue/inputtext';
import Button from 'primevue/button';



createApp(App).use(PrimeVue).use(VueButtonAnimation).component('InputText', InputText).component('Button', Button).mount('#app')
