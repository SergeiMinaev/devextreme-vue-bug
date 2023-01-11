import { createApp } from 'vue'
import App from './App.vue'
import { DxDateBox } from 'devextreme-vue/ui/date-box'
import './assets/main.css'

const app = createApp(App);
app.component("dx-date-box", DxDateBox);
app.mount('#app');
