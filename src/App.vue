<template>
  <div id="app">
    <PortfolioStart/>
  </div>
</template>

<script>
import PortfolioStart from './components/PortfolioStart.vue'

export default {
  name: 'app',
  components: {
    PortfolioStart
  }
}
</script>

<style lang="less">
  #app { 
    //Base font for REM 
    font-size: 16px; 
  }
</style>
