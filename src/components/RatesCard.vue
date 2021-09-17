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
    <button class="btn btn-secondary">{{ card.btnText }}</button>
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
    height: 515px;
    border: 1px solid $border-primary;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px rgba(0, 0, 0, .4);
    transition: .3s;
    &:hover {
      box-shadow: 0 3px $brand-primary, 1px 0 20px rgba(0, 0, 0, .1), -1px 0 20px rgba(0, 0, 0, .1);
      border: none;
      height: 530px;
      transform: translateY(-1%);
    }
    &>* {
      margin-bottom: 20px;
    } 
  }

  .card-plan {
    padding: 8px 15px;
    text-align: center;
    color: $brand-primary;
    background-color: $brand-tertiary;
    border-radius: 50px;
    align-self: flex-start;
    font-weight: bold;
  }

  i {
    color: $brand-primary;
    margin-right: 8px;
  }
    
  h5 {
    font-size: 2rem;
    color: black;
  }

  hr {
    border-top: 1px solid $border-primary;
  }
</style>