<template>
  <div class="home">
    <div class="container">
      <Table :data="astronauts">
        <table-column
          label="Name"
          name="name"
        >
          <template slot="header">
            Header
          </template>
          <template>
            Body
          </template>
        </table-column>
        <table-column
          label="Date"
          name="date"
        ></table-column>
        <table-column
          label="Days"
          name="days"
        ></table-column>
        <table-column
          label="Mission"
          name="mission"
        ></table-column>
        <table-column
          label="Several flights"
          name="isMultiple"
        ></table-column>
      </Table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Table from '@/components/Table/index.vue';
import TableColumn from '@/components/Table/TableColumn.vue';

export default {
  name: 'HomePage',
  components: {
    Table,
    TableColumn,
  },
  computed: {
    ...mapState('table', {
      astronauts: (state) => state.astronauts,
    }),
  },
  mounted() {
    this.$store.dispatch('table/fetchAstronaunts');
  },
};
</script>
