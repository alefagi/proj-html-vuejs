<template>
  <section id="features">
    <div class="container">
      <div class="section-title w-50">
        <h2>Key Features</h2>
        <div>Start working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</div>
      </div>
      <div class="card-container">
        <FeaturesCard v-for="(card, index) in cardList" :key="index" :iconClass="card.iconClass" :title="card.title" :text="card.text" />
      </div>
    </div>
  </section>
</template>

<script>
import FeaturesCard from './FeaturesCard.vue';

export default {
  name: 'Features',
  components: {
    FeaturesCard,
  },
  data() {
    return {
      cardList: [
        {
          iconClass: 'fas fa-layer-group',
          title: 'Modular',
          text: 'Composed in a pseudo-Latin language which more or less corresponds.',
        },
        {
          iconClass: 'fas fa-mobile-alt',
          title: 'Responsive',
          text: 'Composed in a pseudo-Latin language which more or less corresponds.',
        },
        {
          iconClass: 'fas fa-expand',
          title: 'Customizable',
          text: 'Composed in a pseudo-Latin language which more or less corresponds.',
        },
        {
          iconClass: 'fas fa-expand-arrows-alt',
          title: 'Scalable',
          text: 'Composed in a pseudo-Latin language which more or less corresponds.',
        }
      ],
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/sectionTitle.scss";

  #features {
    margin-top: 80px;
  }

  .container {
    height: 100%;
  }
</style>