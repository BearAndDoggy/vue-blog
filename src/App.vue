<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view></router-view>
    </main> 
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Index from "./pages/Index"

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="less">
@import url('./assets/common.less');
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  #main {
    flex: 1;
    position: relative;
  }
  #footer {
    background: @footColor;
  }
}

</style>
