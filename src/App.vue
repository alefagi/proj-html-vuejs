<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";


</style>
