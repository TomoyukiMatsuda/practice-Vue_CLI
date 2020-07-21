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

    <br>
    <button @click="add">追加</button>
    <ul style="width: 200px; margin: auto;">
      <transition-group>
        <li
          style="cusor: pointer;"
          v-for="(number, index) in numbers"
          @click="remove(index)"
          key="number"
          >{{ number }}
        </li>
      </transition-group>
    </ul>
    <br>
    <button @click="show = !show">切り替え</button>
    <br><br>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show"></div>
    </transition>

    <br>
    <button @click="myComponent = 'ComponentA'">コンポーネントA</button>
    <button @click="myComponent = 'ComponentB'">コンポーネントB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <transition
      name="fade"
      mode="out-in"
    >
      <p v-if="show" key="hello">こんちは</p>
      <p v-else key="bye">さよなら</p>
    </transition>
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
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

export default {
  data() {
    return {
      show: true,
      myAnimation: 'slide',
      data: "データ",
      myComponent: "ComponentA",
      numbers: [0, 1, 2],
      nextNumber: 3,
    }
  },
  components: {
    Childe,
    ComponentA,
    ComponentB,
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      el.style.transform = "scale(0)"
    },
    enter(el, done) {
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 40);
    },
    leave(el, done) {
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0 ) {
          clearInterval(interval);
          done();
        }
      }, 40);
    }
  }
}
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}

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