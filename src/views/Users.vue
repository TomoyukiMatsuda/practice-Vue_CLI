<template>
  <div>
    <h3>User</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h3>User No.{{ id }}</h3>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>