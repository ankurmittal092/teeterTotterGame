<template>
  <div class="d-fr cntr square" v-bind:style="{ height: `${size}px`, width: `${size}px` }">
    {{ weight }}
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    size: String,
    weight: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .square {
    background-color: green;
    color: #fff;
    font-weight: 500;
  }
</style>
