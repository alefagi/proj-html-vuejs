<template>
  <div id="app">
    <header>
      <Navbar :navItems="navItems"/>
      <Jumbotron />
      <Partners />
    </header>
    <main>
      <Features />
      <Quickstart />
      <Components />
      <Rates />
      <Subscribe />
    </main>
    <footer>
      <FooterTop :footerLinks="footerLinks"/>
      <FooterBottom />
    </footer>
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
import Subscribe from './components/Subscribe.vue';
import FooterTop from './components/FooterTop.vue';
import FooterBottom from './components/FooterBottom.vue';


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
    Subscribe,
    FooterTop,
    FooterBottom,
  },
  data() {
    return {
      navItems: [
        {
          text: 'home',
          url: '#',
        },
        {
          text: 'landing',
          url: '#',
        },
        {
          text: 'pages',
          url: '#',
        },
        {
          text: 'docs',
          url: '#',
        }
      ],
      footerLinks: [
        {
          title: 'Company',
          links: [
            {
              text: 'About us',
              url: '#',
            },
            {
              text: 'Services',
              url: '#',
            },
            {
              text: 'Team',
              url: '#',
            },
            {
              text: 'Pricing',
              url: '#',
            },
            {
              text: 'Project',
              url: '#',
            },
            {
              text: 'Careers',
              url: '#',
            },
            {
              text: 'Blog',
              url: '#',
            },
            {
              text: 'Login',
              url: '#',
            }
          ]
        },
        {
          title: 'Usefull Links',
          links: [
            {
              text: 'Terms of Services',
              url: '#',
            },
            {
              text: 'Privacy Policy',
              url: '#',
            },
            {
              text: 'Documentation',
              url: '#',
            },
            {
              text: 'Changelog',
              url: '#',
            },
            {
              text: 'Components',
              url: '#',
            }
          ]
        },
      ],
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import "./assets/scss/style.scss";


</style>
