import {createApp} from 'vue'
import vue_app from './vue_app.vue'
import router from './Router'

require('./bootstrap');

const  app = createApp(vue_app);
app.use(router);
app.mount("#vue_app")
