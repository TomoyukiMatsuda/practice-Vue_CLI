<template>
  <div class="main">
    <Childe props-text="プロップステキスト">
      <template v-slot:text>
        <p>スロットだよ</p>
      </template>
      <template v-slot:data>
        <p>{{ data }}</p>
      </template>
    </Childe>
    <button @click="myAnimation = 'slide'">スライド</button>
    <button @click="myAnimation = 'fade'">フェイド</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show">切り替え</button>
    <transition
     enter-active-class="animate__animated animate__bounce"
     leave-active-class="animate__animated animate__shakeX"
     appear
    >
      <p v-if="show">ハロー</p>
    </transition>
    <transition :name="myAnimation" appear>
        <p v-show="show">バーい</p>
    </transition>
  </div>
</template>

<script>
import Childe from "./components/Childe.vue";

export default {
  data() {
    return {
      show: true,
      myAnimation: 'slide',
      data: "データ",
    }
  },
  components: {
    Childe,
  }
}
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .8s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity .8s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slide-in{
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>