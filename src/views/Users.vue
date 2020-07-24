<template>
  <div>
    <h3>User</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h3>User No.{{ id }}</h3>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>
    <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 } }">次のユーザー</router-link>
    <router-view></router-view> <!-- chldren で登録したpathコンポーネントが入る。 -->
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>