<template>
  <div>
    <LikeHeader>
      <h1>はじめまして</h1>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber> <!-- コンポーネントの呼び出し !-->
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h3>イベントフォーム</h3>
      <label for="title">タイトル</label>
      <input
      id="title"
      type="text"
      v-model="eventData.title"
      >
      <p>{{ eventData.title }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"; // コンポーネントのローカル登録
import Home from "./components/Home.vue"
import About from "./components/About.vue"
export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      eventData: {
        title: "タイトル",
      }
    }
  },
  components: {
    LikeHeader,
    Home,
    About,
  },
  methods: {
    incrementNumber(v) {
      this.number = v;
    }
  }
}
</script>