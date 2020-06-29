<template>
  <div>
    <slot :data="data">{{data}}</slot>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: { data: Array },
};
</script>

<style lang="scss" scoped>
</style>
