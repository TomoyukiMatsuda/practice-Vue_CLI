<template>
  <div>
    <h1>Usersだよ</h1>
    <nav>
      <router-link
        to="/"
        class="link"
        active-class="link-active"
        exact
        >Home</router-link> <!-- 非同期でページに 遷移できる -->
      <router-link
        to="/users"
        class="link"
        active-class="link-active"
        exact
        >Users</router-link>
    </nav>
  </div>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }
  .link-active{
    font-size: 20px;
  }
</style>