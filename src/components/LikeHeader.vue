<template>
  <div>
    <slot :fafa="user" text="マツダくん大好き"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "ともゆき",
        lastName: "マツダ"
      }
    }
  }
};
</script>