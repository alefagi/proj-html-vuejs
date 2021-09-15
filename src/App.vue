<template>
  <div id="app">
    <header>
      <Navbar />
      <Jumbotron />
      <Partners />
    </header>
    <main>
      <Features />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Jumbotron from './components/Jumbotron.vue';
import Partners from './components/Partners.vue';
import Features from './components/Features.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron,
    Partners,
    Features,
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
