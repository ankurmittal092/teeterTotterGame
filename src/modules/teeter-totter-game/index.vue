<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-on:click="greet">{{ test }}</div>
    <input v-model="messageData" />
    <div>Yooo - {{ testTodo }}</div>
  </div>
</template>

<script>
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
