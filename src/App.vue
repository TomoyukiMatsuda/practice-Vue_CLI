<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber> <!-- コンポーネントの呼び出し !-->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"; // コンポーネントのローカル登録

export default {
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
