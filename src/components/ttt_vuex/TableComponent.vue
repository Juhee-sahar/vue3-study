<template>
  <table>
    <tr-component v-for="(data, index) in tableData" :key="index" :row-index="index" />
  </table>
</template>

<script>
  import { mapState } from 'vuex';
import TrComponent from './TrComponent.vue';

  export default {
    components : {
      TrComponent,
    },
    computed: {
      ...mapState({
        tableData : state => state.tableData
      })
    },
    methods: {
    },
  };
</script>

<style>
</style>