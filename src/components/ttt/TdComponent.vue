<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
  export default {
    props : {
      cellData : String,
      cellIndex : Number,
      rowIndex : Number,
      turn : Function
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
        this.turn(this.rowIndex, this.cellIndex);
      },
    },
  };
</script>

<style scoped>
</style>