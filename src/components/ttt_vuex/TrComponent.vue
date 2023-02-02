<template>
  <tr>
    <td-component v-for="(data, index) in rowData" :key="index" :cell-index="index" :row-index="rowIndex" />
  </tr>
</template>

<script>
import { mapState } from 'vuex';
import TdComponent from  './TdComponent.vue'

  export default {
    props : {
      rowIndex : Number,
    },
    components : {
      TdComponent,
    },
    computed: {
      ...mapState('tictactoe', {
        rowData (state){ return state.tableData[this.rowIndex]}
      })
    },
    methods: {
    },
  };
</script>

<style scoped>
</style>