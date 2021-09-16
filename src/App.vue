<template>
  <div id="app">
    <header>
      <Navbar />
      <Jumbotron />
      <Partners />
    </header>
    <main>
      <Features />
      <Quickstart />
      <Components />
      <Rates />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Jumbotron from './components/Jumbotron.vue';
import Partners from './components/Partners.vue';
import Features from './components/Features.vue';
import Quickstart from './components/Quickstart.vue';
import Components from './components/Components.vue';
import Rates from './components/Rates.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron,
    Partners,
    Features,
    Quickstart,
    Components,
    Rates,
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
