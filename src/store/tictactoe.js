export const SET_WINNER = 'SET_WINNER'
export const CLICK_CELL = 'CLICK_CELL'
export const CHANGE_TURN = 'CHANGE_TURN'
export const RESET_GAME = 'RESET_GAME'
export const NO_WINNER = 'NO_WINNER'

export default {
  namespaced: true,
  state() {
    return {
      tableData : [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      turn : 'O',
      winner : '',

    }
  }, // vue의 data와 비슷
  getters : {
    turnMessage(state) {
      return state.winner + '님이 승리하셨습니다.';
    }
  }, // vue의 computed와 비슷 캐싱!
  mutations : {
    [SET_WINNER](state, winner) {
      state.winner = winner;
    },
    [CLICK_CELL](state, {row, cell}) {
      state.tableData[row][cell] = state.turn;
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === 'O' ? 'X' : 'O';
    },
    [RESET_GAME](state) {
      state.turn = 'O';
      state.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]
    },
    [NO_WINNER](state) {
      state.winner = '';
    }
  }, // state를 수정할 때 사용. 동기적으로
  actions : {

  } // 비동기를 사용할 때 또는 여러 mutations를 연달아 실행할 때
};



// import { createStore } from "vuex"

// export const SET_WINNER = 'SET_WINNER'
// export const CLICK_CELL = 'CLICK_CELL'
// export const CHANGE_TURN = 'CHANGE_TURN'
// export const RESET_GAME = 'RESET_GAME'
// export const NO_WINNER = 'NO_WINNER'

// export default createStore({
//   state() {
//     return {
//       tableData : [
//         ['', '', ''],
//         ['', '', ''],
//         ['', '', ''],
//       ],
//       turn : 'O',
//       winner : '',

//     }
//   }, // vue의 data와 비슷
//   getters : {
//     turnMessage(state) {
//       return state.winner + '님이 승리하셨습니다.';
//     }
//   }, // vue의 computed와 비슷 캐싱!
//   mutations : {
//     [SET_WINNER](state, winner) {
//       state.winner = winner;
//     },
//     [CLICK_CELL](state, {row, cell}) {
//       state.tableData[row][cell] = state.turn;
//     },
//     [CHANGE_TURN](state) {
//       state.turn = state.turn === 'O' ? 'X' : 'O';
//     },
//     [RESET_GAME](state) {
//       state.turn = 'O';
//       state.tableData = [
//         ['', '', ''],
//         ['', '', ''],
//         ['', '', ''],
//       ]
//     },
//     [NO_WINNER](state) {
//       state.winner = '';
//     }
//   }, // state를 수정할 때 사용. 동기적으로
//   actions : {

//   } // 비동기를 사용할 때 또는 여러 mutations를 연달아 실행할 때
// });