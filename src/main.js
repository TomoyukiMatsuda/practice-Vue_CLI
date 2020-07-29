import Vue from 'vue';
import App from './App.vue';
import router from "./router";

router.beforeEach((to, from, next) => { // ページ遷移する時に発火する処理
  console.log('グローバルビフォーイーチ');
  if (to.path === '/users/1') {
    next( {path: '/' });
  }
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')