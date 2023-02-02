<template>
  <table>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
      <td 
        @contextmenu.prevent="onRightClickTd(rowIndex, cellIndex)"
        @click="onClickTd(rowIndex, cellIndex)" 
        v-for="(cellData, cellIndex) in rowData" :key="cellIndex" :style="cellDataStyle(rowIndex, cellIndex)">
        {{ cellDataText(rowIndex, cellIndex) }}
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState } from 'vuex';
import { CODE, OPEN_CELL, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL, CLICK_MINE } from '../../store/mindSweeper'

  export default {
    computed: {
      ...mapState('mindSweeper',['tableData', 'halted']),
      cellDataStyle(state) {
        return (row, cell) => {
          switch (this.tableData[row][cell]) {
            case CODE.NORMAL:
            case CODE.MINE:
              return {
                background: '#444',
                color : 'black'
              };
            case CODE.CLICKED_MINE:
            case CODE.OPENED:
              return {
                background: 'white',
              };
            case CODE.FLAG:
            case CODE.FLAG_MINE:
              return {
                background: 'red',
              };
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
              return {
                background: 'yellow',
              };
            default:
              return {};
          }
        }
      },
      cellDataText() {
        return (row, cell) => {
          switch (this.tableData[row][cell]) {
            case CODE.MINE:
              return 'X';
            case CODE.NORMAL:
              return '';
            case CODE.FLAG_MINE:
            case CODE.FLAG:
              return '!';
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
              return '?';
            case CODE.CLICKED_MINE:
              return '펑';
            default:
              return this.tableData[row][cell] || '';
          }
        }
      },
    },
    methods: {
      onClickTd(row, cell) {
        if(this.halted) {
          return;
        }
        switch (this.tableData[row][cell]) {
          case CODE.NORMAL:
            this.$store.commit(`mindSweeper/${OPEN_CELL}`, { row, cell });
            return;
          case CODE.MINE:
            this.$store.commit(`mindSweeper/${CLICK_MINE}`, { row, cell });
            return;
          default:
            return;
        }
      },
      onRightClickTd(row, cell) {
        if(this.halted) {
          return;
        }
        switch (this.tableData[row][cell]) {
          case CODE.NORMAL:
          case CODE.MINE:
            this.$store.commit(`mindSweeper/${FLAG_CELL}`, { row, cell });
            return;
          case CODE.FLAG_MINE:
          case CODE.FLAG:
            this.$store.commit(`mindSweeper/${QUESTION_CELL}`, { row, cell });
            return;
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
            this.$store.commit(`mindSweeper/${NORMALIZE_CELL}`, { row, cell });
            return;
          default:
            return;
        }
      }
    },
  };
</script>

<style>
</style>