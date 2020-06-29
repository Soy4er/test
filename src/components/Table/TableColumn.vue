<template>
  <div>
      {{'-'+data}}
    <slot name="header">{{ label }}</slot>
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'TableHeader',
  props: { label: String, name: String, data: Array },
};
</script>

<style lang="scss" scoped>

</style>
