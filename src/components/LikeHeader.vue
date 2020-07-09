<template>
  <div>
    <slot name="title" :fafa="user" text="マツダくん大好き"></slot>
    <slot name="num"></slot>
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