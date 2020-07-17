import Vue from 'vue';
import App from './App.vue';
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber); // コンポーネントのグローバル登録
Vue.filter("upCase", function(val) {
  return val.toUpperCase();
});
Vue.mixin({
  created() {
    console.log("グローバルミックスいん");
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
