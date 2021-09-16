<template>
  <section id="rates">
    <div class="container">
      <div class="section-title w-50">
        <h2>Our rates for developer from landrick team</h2>
        <div>Start working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</div>
      </div>
      <div class="card-container">
        <RatesCard />
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
  }
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