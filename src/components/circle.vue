<template>
  <div class="d-fr cntr circle" v-bind:style="{ height: `${size}px`, width: `${size}px` }">
    {{ weight }}
  </div>
</template>

<script>
export default {
  name: 'MyCircle',
  props: {
    size: String,
    weight: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circle {
    border-radius: 100%;
    background-color: red;
    color: #fff;
    font-weight: 500;
  }
</style>
