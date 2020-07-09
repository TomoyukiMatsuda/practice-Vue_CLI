<template>
  <div>
    <LikeHeader>
      <template v-slot:title="sp">
        <h1>スロットタイトルだよ</h1>
        <p>{{ sp }}</p>
      </template>
      <template v-slot:num>
        <h2>{{ number }}です！！</h2>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber> <!-- コンポーネントの呼び出し !-->
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"; // コンポーネントのローカル登録

export default {
  data() {
    return {
      number: 10
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(v) {
      this.number = v;
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
