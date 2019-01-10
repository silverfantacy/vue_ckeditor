import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import App from './App.vue';

Vue.use(CKEditor);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
