<template>
  <div>{{ turn }}님의 턴입니다.</div>
  <table-component>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
      <td @click="onClickTd(rowIndex, cellIndex, cellData)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{ cellData }}</td>
    </tr>
  </table-component>
  <div v-if="winner">{{ turnMessage }}</div>
</template>

<script>
  import TableComponent from '../components/ttt_slot/TableComponent.vue';
  import { mapGetters, mapState } from 'vuex';
  import { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER } from '../store/tictactoe';

  export default {
    components : {
      TableComponent,
    },
    computed: {
      ...mapState('tictactoe', ['tableData', 'winner', 'turn']),
      ...mapGetters('tictactoe', ['turnMessage'])
    },
    methods: {
      onClickTd(rowIndex, cellIndex, cellData) {
        if(cellData) return;

        this.$store.commit(`tictactoe/${CLICK_CELL}`, {row : rowIndex, cell : cellIndex});

        let win = false;
        if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
          win = true;
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
          win = true;
        }
        if (win) {
          this.$store.commit(`tictactoe/${SET_WINNER}`, this.turn);
          this.$store.commit(`tictactoe/${RESET_GAME}`);
        } else {
          let all = true; // all이 true면 무승부라는 뜻
          this.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            });
          });
          if (all) { // 무승부
            this.$store.commit(`tictactoe/${NO_WINNER}`);
            this.$store.commit(`tictactoe/${RESET_GAME}`);
          } else {
            this.$store.commit(`tictactoe/${CHANGE_TURN}`);
          }
        }


      }
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