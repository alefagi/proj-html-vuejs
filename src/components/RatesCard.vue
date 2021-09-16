<template>
  <div class="rates-card">
    <div class="card-icon">
      <i :class="iconClass"></i>
    </div>
    <h5>{{ title }}</h5>
    <div class="card-text">{{ text }}</div>
    <button class="btn-primary">Buy Now</button>
  </div>
</template>

<script>
export default {
  name: 'RatesCard',
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

  .rates-card {
    width: calc(100% / 3) - 2%;
    border: 1px solid $border-primary;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>