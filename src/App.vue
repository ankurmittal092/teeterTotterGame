<template>
  <div id="app">
    <TeeterTotterGame
      msg="Welcome to Teeter Tottler Game"
    />
  </div>
</template>

<script>
import TeeterTotterGame from './teeter-totter-game';

export default {
  name: 'app',
  components: {
    TeeterTotterGame
  }
}
</script>

<style>
  body {
    background: #f2f2f2;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .d-fr {
    display: flex;
  }

  .d-fc {
    display: flex;
    flex-direction: column;
  }

  .d-fr.cntr, .d-fc.cntr {
    justify-content: center;
    align-items: center;
  }
</style>
