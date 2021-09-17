<template>
  <section id="partners">
    <div class="container">
      <a v-for="(partner, index) in partners" :key="index" :href="partner.url"><img :src="partner.path" :alt="partner.path"></a>    
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partners',
  data() {
    return {
      partners: [
        {
          path: require ('../assets/img/amazon.svg'),
          url: '#'
        },
        {
          path: require ('../assets/img/google.svg'),
          url: '#'
        },
        {
          path: require ('../assets/img/lenovo.svg'),
          url: '#'
        },
        {
          path: require ('../assets/img/paypal.svg'),
          url: '#'
        },
        {
          path: require ('../assets/img/shopify.svg'),
          url: '#'
        },
        {
          path: require ('../assets/img/spotify.svg'),
          url: '#'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

  #partners {
    background-color: $brand-secondary;
    border-top: 2px solid $border-primary;
    height: 80px;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
  }

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    height: 25%;
    display: inline-block;
  }
</style>