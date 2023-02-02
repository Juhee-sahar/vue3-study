import { createStore } from "vuex"

import tictactoe from './tictactoe';
import mindSweeper from './mindSweeper';

export default createStore({
  modules : {
    tictactoe : tictactoe,
    mindSweeper : mindSweeper
  }
});