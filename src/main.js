import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App), // render関数にてApp.vueをレンダリング
}).$mount('#app') // index.htmlのid=appをマウント
