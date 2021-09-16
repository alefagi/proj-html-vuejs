<template>
  <div class="rates-card">
    <span class="card-plan">{{ card.cardPlan }}</span>
    <h5>{{ card.price }}</h5>
    <span>{{ card.period }}</span>
    <span>{{ card.text }}</span>
    <hr>
    <ul>
      <li v-for="(detail, index) in card.detailsText" :key="index">
        <i class="far fa-check-circle"></i>
        {{ detail}}
      </li>
    </ul>
    <button class="btn btn-primary">{{ card.btnText }}</button>
    <span>{{ card.payment }}</span>
  </div>
</template>

<script>
export default {
  name: 'RatesCard',
  props: {
    card: Object,
  },
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
    display: flex;
    flex-direction: column;
    &>* {
      margin-bottom: 20px;
    } 
  }

  .card-plan {
    padding: 8px 15px;
    text-align: center;
    color: $brand-secondary;
    background-color: $brand-primary;
    border-radius: 50px;
    align-self: flex-start;
  }

  ul {
    li {
      list-style-type: none;
      i {
        color: $brand-secondary;
        margin-right: 8px;
      }
    }
  }

  h5 {
    font-size: 2rem;
    color: black;
  }
</style>