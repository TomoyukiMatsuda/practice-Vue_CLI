<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <router-link
       to="/"
       class="link"
       >Home</router-link> <!-- 非同期でページに 遷移できる -->
      <router-link
       to="/users"
       class="link"
       >Users</router-link>
    </nav>
    <router-view></router-view> <!-- これは動的コンポーネントみたいなもの？ -->
  </div>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }
</style>