<template>
  <div>
    <h2>{{ title | upCase }}</h2>
    <p>{{ subTitle | lowCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
};
</script>