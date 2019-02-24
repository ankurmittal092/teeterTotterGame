<!-- <MyCircle size="40" weight="2" /> -->
<!-- <Triangle size="80" weight="4" /> -->

<template>
  <div
    class="game-container"
    v-on:keyup="keymonitor"
    v-on:blur="reGainFocus"
    ref='gameConntainer'
    tabindex="0"
  >
    <div v-if="gamePaused">
      Game Paused
    </div>
    <div
      v-bind:style="{ left: `${left}px`, top: `${top}px`, position: 'absolute' }"
    >
      <Square
        v-bind:size="weight * 20"
        v-bind:weight="weight"
        v-if="shapeNumber === 1"
      />
      <MyCircle
        v-bind:size="weight * 20"
        v-bind:weight="weight"
        v-if="shapeNumber === 2"
      />
      <Triangle
        v-bind:size="weight * 20"
        v-bind:weight="weight"
        v-if="shapeNumber === 3"
      />
    </div>
    <div class="d-fr cntr balance">
      <div class="beam"></div>
      <div class='balance-pivot'>
        <Triangle
          v-bind:size="50"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Square from '../../components/square';
import MyCircle from '../../components/circle';
import Triangle from '../../components/triangle';
import randomIntFromInterval from '../../utils/randomIntFromInterval.js';

export default {
  name: 'Game',
  data: function () {
    return {
      test: '',
      messageData: this.msg,
      left: 0,
      top: 0,
      shapeNumber: null,
      weight: null
    };
  },
  mounted() {
    this.initializeShape();
    this.reGainFocus();
    this.startDownwardMovement();
  },
  methods: {
    initializeShape() {
      const randomShape = randomIntFromInterval(1, 3);
      const randomWeight = randomIntFromInterval(1, 10);

      this.shapeNumber = randomShape;
      this.weight = randomWeight;
    },
    keymonitor: function(event) {
      switch(event.keyCode) {
        case 32: {
          this.$store.dispatch(this.gamePaused ? 'playGame' : 'pauseGame');
          break;
        }
        case 39: {
          if (!this.gamePaused) {
            this.left += 20;
          }
          break;
        }
        case 37: {
          if (this.left > 0 && !this.gamePaused) {
            this.left -= 20;
          }
          break;
        }
        case 40: {
          if (!this.gamePaused) {
            this.top += 20;
          }
          break;
        }
      }
    },
    reGainFocus() {
      this.$refs.gameConntainer && this.$refs.gameConntainer.focus();
    },
    startDownwardMovement() {
      this.downMovementInterval = setInterval(() => {
        if (!this.gamePaused) {
          this.top += 10;
        }
      }, 700);
    }
  },
  computed: {
    gameStarted() {
      return this.$store.getters.gameStarted;
    },
    gamePaused() {
      return this.$store.getters.gamePaused;
    }
  },
  components: {
    Square,
    MyCircle,
    Triangle
  }
}
</script>

<style scoped>
  .game-container {
    margin: 10px;
    height: calc(100vh - 22px);
    width: 1000px;
    margin: 0 auto;
    position: relative;
    outline: none;
    overflow: hidden;
    background-image: url('/bg.jpg');
    box-shadow: 1px 2px 20px 5px #c3bdbd;
    border-radius: 3px;
     background-size: cover;
  }

  .balance {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .beam {
    border: 3px solid;
    width: 90%;
    position: absolute;
    top: 0;
    z-index: 1;
    border-radius: 3px;
  }
</style>
