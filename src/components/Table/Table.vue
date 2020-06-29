<template>
  <table class="table">
    <TableHeader :column="column" />
    <TableBody />
    <TableFooter />
    {{columnsElements}}
  </table>
</template>

<script>
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import TableFooter from './TableFooter.vue';

export default {
  name: 'Table',
  props: { elements: Array, header: { type: Object, required: true } },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
  },
  computed: {
    column() {
      console.log(this.header);
      return this.header || this.columnsTable;
    },
    columnsElements() {
      return (this.elements) ? Object.keys(this.elements[0]) : [];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
