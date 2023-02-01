<template>
  <tr>
    <td-component v-for="(data, index) in rowData" :key="index" :cell-data="data" :cell-index="index" :row-index="rowIndex" />
  </tr>
</template>

<script>
  import TdComponent from  './TdComponent.vue'

  export default {
    props : {
      rowData : Array,
      rowIndex : Number,
    },
    components : {
      TdComponent
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

<style scoped>
</style>