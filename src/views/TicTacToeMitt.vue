<template>
  <div>{{ turn }}님의 턴입니다.</div>
  <table-component :table-data="tableData" />
  <div v-if="winner">{{ winner }}님의 승리</div>
</template>

<script>
  import TableComponent from '../components/ttt_mitt/TableComponent.vue';

  export default {
    components : {
      TableComponent,
    },
    data() {
      return {
        tableData : [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        turn : 'O',
        winner : '',
      };
    },
    computed: {
    },
    created() {
      this.emitter.on('tttTdIndex', this.changeTurn);
    },
    methods: {
      changeTurn(Index) {
        if(this.tableData[Index.rowIndex][Index.cellIndex] !== '') {
          return;
        }

        this.tableData[Index.rowIndex][Index.cellIndex] = this.turn;

        let win = false;
        if (this.tableData[Index.rowIndex][0] === this.turn && this.tableData[Index.rowIndex][1] === this.turn && this.tableData[Index.rowIndex][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][Index.cellIndex] === this.turn && this.tableData[1][Index.cellIndex] === this.turn && this.tableData[2][Index.cellIndex] === this.turn) {
          win = true;
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
          win = true;
        }

        if (win) {
          this.winner = this.turn;
          this.turn = 'O';
          this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
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
            this.winner = '';
            this.turn = 'O';
            this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
          } else {
            this.turn = this.turn === 'O' ? 'X' : 'O';
          }
        }
      }
    },
  };
</script>

<style scoped>
</style>