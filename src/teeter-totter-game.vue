<template>
  <div class="hello">
    <div v-if="!gameStarted">
      <h1 >{{ msg }}</h1>
      <button
        @click="$store.dispatch('startGame')"
      >
        Start Game
      </button>
    </div>

    <!-- <div v-on:click="greet">{{ test }}</div> -->
    <!-- <input v-model="messageData" /> -->
    <!-- <div>Yooo - {{ testTodo }}</div> -->
    <!-- <button @click="$store.dispatch('endGame')">End Game</button> -->
    <div v-if="gameStarted">
      <Game />
    </div>
  </div>
</template>

<script>
import Game from './modules/game';

export default {
  name: 'TeeterTotterGame',
  props: {
    msg: String
  },
  data: function () {
    return {
      test: '',
      messageData: this.msg
    };
  },
  methods: {},
  computed: {
    gameStarted: function () {
      return this.$store.getters.gameStarted;
    },
    gamePaused: function () {
      return this.$store.getters.gamePaused;
    }
  },
  components: {
    Game
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
