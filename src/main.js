import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.scss';
import router from './router';
import axios from 'axios';
import moment from 'moment';
import CONSTANTS from './utils/constants';

const app = createApp(App);

app.use(router);

app.config.globalProperties.axios = axios;
app.config.globalProperties.moment = moment;
app.config.globalProperties.CONSTANTS = CONSTANTS;

app.mount('#app');
