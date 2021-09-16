<template>
  <section id="rates">
    <div class="container">
      <div class="section-title w-50">
        <h2>Our rates for developer from landrick team</h2>
        <div>Start working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</div>
      </div>
      <div class="card-container">
        <RatesCard v-for="(card, index) in cardList" :key="index" :card="card"/>
      </div>
    </div>
  </section>
</template>

<script>
import RatesCard from './RatesCard.vue';

export default {
  name: 'Rates',
  components: {
    RatesCard,
  },
  data() {
    return {
      cardList: [
        {
          cardPlan: 'Basic',
          price: '$9.00',
          period: 'Per Month',
          text: 'All the basics for businesses that are just getting started.',
          detailsText: [
            'Full Access',
            'Enhanced Security',
            'Source Files',
            '1 Domain Free',
            'Enhanced Security',
          ],
          btnText: 'Buy Now',
          payment: '*No credit card required',
        },
        {
          cardPlan: 'Business',
          price: '$39.00',
          period: 'Per Month',
          text: 'Better for growing businesses that want more customers.',
          detailsText: [
            'Full Access',
            'Enhanced Security',
            'Source Files',
            '1 Domain Free',
            'Enhanced Security',
          ],
          btnText: 'Buy Now',
          payment: '*No credit card required',
        },
        {
          cardPlan: 'Enterprise',
          price: '$79.00',
          period: 'Per Month',
          text: 'Advanced features for pros who need more customization.',
          detailsText: [
            'Full Access',
            'Enhanced Security',
            'Source Files',
            '1 Domain Free',
            'Enhanced Security',
          ],
          btnText: 'Buy Now',
          payment: '*No credit card required',
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/sectionTitle.scss";

  #rates {
    margin-top: 80px;
  }

  .section-title {
    margin: 0 auto;
    text-align: center;
  }


</style>