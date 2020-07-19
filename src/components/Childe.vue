<template>
  <div>
    <slot name="text"></slot>
    <slot name="data"></slot>
    <p>{{ propsText }}</p>
  </div>
</template>

<script>
export default {
  props: ['propsText'],
}
</script>