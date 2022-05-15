import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.scss';
import router from './router';
import CONSTANTS from './utils/constants';

const app = createApp(App);

app.use(router);

app.config.globalProperties.CONSTANTS = CONSTANTS;

app.mount('#app');
