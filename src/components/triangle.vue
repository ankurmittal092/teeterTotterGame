<template>
  <div class="d-fr cntr triangle" v-bind:style="{ borderLeft: `${size/2}px solid transparent`, borderRight: `${size/2}px solid transparent`, borderBottom: `${size}px solid black` }">
    <div class="content" v-bind:style="{ top: `${size/2}px`}">
      {{ weight }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Triangle',
  props: {
    size: String,
    weight: String
  }
}
</script>

<style scoped>
  .triangle {
    width: 0;
    height: 0;
    position: relative;
  }

  .content {
    position: absolute;
    top: 50%;
    color: #ffff;
  }
</style>
