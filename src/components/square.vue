<template>
  <div
    class="d-fr cntr square"
    v-bind:style="{ height: `${size}px`, width: `${size}px` }"
  >
    {{ weight }}
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    size: Number,
    weight: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .square {
    background-color: #fafafa;
    /* color: #fff; */
    font-weight: 500;
  }
</style>
