<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
@import (reference) "./assets/variables.less";

html {
  font-size: 16px;
}

body {
  margin: 0;
  margin-top: 60px;
  font-family: 'Montserrat', sans-serif;
  background-color: @bg;
  color: @body-text;
}
</style>
