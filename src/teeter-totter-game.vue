<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-on:click="greet">{{ test }}</div>
    <input v-model="messageData" />
    <div>Yooo - {{ testTodo }}</div>
    <div class="d-fr cntr">
      <Square size="100" weight="10" />
      <MyCircle size="100" weight="20" />
      <Triangle size="100" weight="30" />
    </div>
  </div>
</template>

<script>
import Square from './components/square';
import MyCircle from './components/circle';
import Triangle from './components/triangle';

export default {
  name: 'TeeterTotterGame',
  props: {
    msg: String
  },
  data: function () {
    return {
      test: 'hello hello',
      messageData: this.msg
    };
  },
  methods: {
    greet: function (params) {
      console.log(this, this.$store);
    },
    inputChange: console.log
  },
  computed: {
    testTodo: function () {
      return this.$store.getters.testTodo;
    }
  },
  components: {
    Square,
    MyCircle,
    Triangle
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
