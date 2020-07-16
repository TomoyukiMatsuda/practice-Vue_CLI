<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '3px', color: 'red' }">Homeだよ</p>
    <h2>{{ title | upCase }}</h2>
    <p>{{ subTitle | lowCase }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city"
    }
  },
  filters: {
    lowCase(val) {
      return val.toLowerCase();
    }
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
}
</script>