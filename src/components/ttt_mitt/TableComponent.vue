<template>
  <table>
    <tr-component v-for="(data, index) in tableData" :key="index" :row-data="data" :row-index="index" />
  </table>
</template>

<script>
  import TrComponent from './TrComponent.vue';

  export default {
    props : {
      tableData : Array,
    },
    components : {
      TrComponent,
    },
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {
    },
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>