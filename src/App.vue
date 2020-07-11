<template>
  <div>
    <LikeHeader #default="slotProps">
      <h1>スロットタイトルだよ</h1>
      <p>{{ slotProps }}</p>
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
