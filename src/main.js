import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import VueButtonAnimation from 'vue-button-animation'

//css
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'

//components
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import Sidebar from 'primevue/sidebar';



createApp(App)
    .use(PrimeVue)
    .use(VueButtonAnimation)
    .component('InputText', InputText)
    .component('Button', Button)
    .component('ProgressSpinner', ProgressSpinner)
    .component('Sidebar', Sidebar)
    .mount('#app')
