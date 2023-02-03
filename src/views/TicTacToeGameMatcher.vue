<template>
  <div>
    <div v-if="currentTictactoe === 'tictactoe'">
      기본 틱택토
      <div>{{ $route.params.name }}</div>
      <tic-tac-toe></tic-tac-toe>
    </div>
    <div v-else-if="currentTictactoe === 'tictactoeMitt'">
      틱택토
      <div>{{ $route.params.name }}</div>
      <tic-tac-toe-mitt></tic-tac-toe-mitt>
    </div>
    <div v-else-if="currentTictactoe === 'tictactoeVuex'">
      틱택토
      <div>{{ $route.params.name }}</div>
      <tic-tac-toe-vuex></tic-tac-toe-vuex>
    </div>
    <div v-else-if="currentTictactoe === 'tictactoeVuexNoComponents'">
      틱택토 vuex 테이블 컴포넌트 없음
      <div>{{ $route.params.name }}</div>
      <tic-tac-toe-vuex-no-components></tic-tac-toe-vuex-no-components>
    </div>
    <div v-else-if="currentTictactoe === 'tictactoeSlot'">
      틱택토 vuex 테이블 컴포넌트 하나에 slot 적용
      <div>{{ $route.params.name }}</div>
      <tic-tac-toe-slot></tic-tac-toe-slot>
    </div>
    <div v-else>일치하는 게임이 없습니다.</div>
  </div>
</template>


<script>
  import TicTacToe from './TicTacToe.vue';
  import TicTacToeMitt from './TicTacToeMitt.vue';
  import TicTacToeVuex from './TicTacToeVuex.vue';
  import TicTacToeVuexNoComponents from './TicTacToeVuexNoComponents.vue';
  import TicTacToeSlot from './TicTacToeSlot.vue';

  export default {
    components : {
      TicTacToe,
      TicTacToeMitt,
      TicTacToeVuex,
      TicTacToeVuexNoComponents,
      TicTacToeSlot
    },
    mounted() {
      console.log(this.$router)
      console.log(this.$route)
    },
    computed : {
      currentTictactoe() {
        return this.$route.params.name;
      }
    }
  }
</script>

