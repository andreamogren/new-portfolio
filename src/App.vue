<template>
  <div id="app">
    <nav>
      <a href="https://comprend.com">ABC</a>
      <a href="https://comprend.com">ABC</a>
      <a href="https://comprend.com">ABC</a>
      <a href="https://comprend.com">ABC</a>
      <a href="https://comprend.com">ABC</a>
    </nav>
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
  background-color: @bg;
  margin-top: 60px;
  color: #000;
  font-family: 'Montserrat', sans-serif;


/*  body {
    background: linear-gradient(0.25turn, #FEEF56, #FF69B4);
    font-family: 'Poppins', sans-serif;
    margin: 0 auto;
    color: #FFF;
  }*/

  nav {
    text-align: center;

    a {
      padding: 1rem; 
    }
  }
}
</style>
