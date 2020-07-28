<template>
  <div>
    <h3>User</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h3>User No.{{ id }}</h3>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja#next-user'">次のユーザー</router-link>
    <router-view></router-view> <!-- chldren で登録したpathコンポーネントが入る。 -->
    <div style="height: 750px;"></div>
    <router-link
      id="next-user"
      :to="{ name: 'users-id-profile',
      params: { id: Number(id) + 1 },
      query: { lang: 'ja', page: 2},
      hash: '#next-user'}"
    >次のユーザー</router-link>
    <div style="height: 1400px;"></div>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>