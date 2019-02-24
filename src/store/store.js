import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const defaultState = {
  gameStarted: false,
  gamePaused: false
};

export default new Vuex.Store({
 state: {...defaultState},
 mutations: {
    START_GAME(state) {
      state.gameStarted = true
    },

    END_GAME(state) {
      var nextState = {...defaultState};
      Object.keys(nextState).forEach(key => {
        state[key] = nextState[key];
      });
    },

    PAUSE_GAME(state) {
      state.gamePaused = true;
    },

    PLAY_GAME(state) {
      state.gamePaused = false;
    }
  },
  actions: {
    startGame({commit}) {
      commit('START_GAME')
    },

    endGame({commit}) {
      commit('END_GAME')
    },

    playGame({commit}) {
      commit('PLAY_GAME');
    },

    pauseGame({commit}) {
      commit('PAUSE_GAME');
    }
  },
  getters: {
    gameStarted: state => state.gameStarted,
    gamePaused: state => state.gamePaused
  }
})
