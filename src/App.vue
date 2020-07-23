<template>
  <div>
    <ul class="tabs-menu">
      <li
        :class="{ active: currentTab === 'Tab1' }"
        @click="currentTab = 'Tab1'"
      >タブ１</li>
      <li
        :class="{ active: currentTab === 'Tab2' }"
        @click="currentTab = 'Tab2'"
      >タブ２</li>
      <li
        :class="{ active: currentTab === 'Tab3' }"
        @click="currentTab = 'Tab3'"
      >タブ３</li>
    </ul>
    <div class="tabs-content">
      <component :is="currentTab"></component>
    </div>
  </div>
</template>

<script>
import Tab1 from "./components/Tab1.vue";
import Tab2 from "./components/Tab2.vue";
import Tab3 from "./components/Tab3.vue";

export default {
  data() {
    return {
      currentTab: 'Tab1',
    };
  },
  components: {
    Tab1,
    Tab2,
    Tab3,
  }
}
</script>

<style scoped>

/* ulのデフォルトスタイルを消去する */
.tabs-menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

/* タブの基本スタイル */
.tabs-menu li {
  display: block;
  float: left;
  margin-right: 8px;
  margin-bottom: -1px;
  padding: 10px 20px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-radius: 4px 4px 0 0;
  color: #557f95;
  text-decoration: none;
  transition: all .2s;
}

/* タブにマウスを乗せたらカーソルの形を変える */
.tabs-menu li:hover {
  cursor: pointer;
}

/* 非選択のタブにマウスを乗せたら色を変える */
.tabs-menu li:not(.active):hover {
  border-color: #f0f0f0 #f0f0f0 #999;
  background-color: #f0f0f0;
}

/* 選択中のタブ */
.tabs-menu .active {
  border-color: #999 #999 transparent #999;
  background-color: #f0fbff;
  color: black;
}

.tabs-content {
  clear: both;
  background-color: #f0fbff;
  border: 1px solid #999;
  border-radius: 0 4px 4px 4px;
  padding: 10px 10px 30px 10px;
}
</style>