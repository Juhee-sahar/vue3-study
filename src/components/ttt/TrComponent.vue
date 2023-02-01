<template>
  <tr>
    <td-component v-for="(data, index) in rowData" @turnChild="parent" :key="index" :cell-data="data" :cell-index="index" :row-index="rowIndex" :turn="turn"/>
  </tr>
</template>

<script>
  import TdComponent from  './TdComponent.vue'

  export default {
    props : {
      rowData : Array,
      rowIndex : Number,
      turn : Function,
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
      parent(d) {
        console.log('hi', d)
      }
    },
  };
</script>

<style scoped>
</style>