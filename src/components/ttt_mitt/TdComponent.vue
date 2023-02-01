<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
  export default {
    props : {
      cellData : String,
      cellIndex : Number,
      rowIndex : Number,
    },
    components : {
    },
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {
      onClickTd() {
        const index = {
          rowIndex : this.rowIndex,
          cellIndex : this.cellIndex
        }
        this.emitter.emit('tttTdIndex', index);
      }
    },
  };
</script>

<style scoped>
</style>