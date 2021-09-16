<template>
  <div class="features-card">
    <div class="card-icon">
      <i :class="card.iconClass"></i>
    </div>
    <h5>{{ card.title }}</h5>
    <div class="card-text">{{ card.text }}</div>
    <a href="#">Read More<i class="fas fa-angle-right fa-sm"></i></a>
  </div>
</template>

<script>
export default {
  name: 'FeaturesCard',
  props: {
    card: Object,
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

  .features-card {
    width: 23%;
    border: 1px solid $border-primary;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: $brand-primary;
    color: $brand-secondary;
    border-radius: 5px;
  }

  h5 {
    color: #3C4858;;
  }

  a {
    text-decoration: none;
    color: $brand-secondary;
    font-weight: bold;
    i {
      padding-left: 8px;
    }
  }

  .card-text {
    color: $text-primary;
  }

  .features-card > * {
    margin-bottom: 15px;
  }

</style>