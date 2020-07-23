<template>
  <div>
    <h3>Home</h3>
    <butt on @click="toUsers">Usersのページに遷移する</butt>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push({ path: "users" });
    }
  }
};
</script>