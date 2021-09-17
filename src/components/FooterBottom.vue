<template>
  <section id="footer-bottom">
    <div class="container">
      <div class="credits">
        &#169; 2020 Landrick. Design with <span>&#9829;</span> by Shreethemes.
      </div>
      <div class="payment-terms">
        <img src="../assets/img/american-ex.png" alt="american-ex">
        <img src="../assets/img/discover.png" alt="discover">
        <img src="../assets/img/master-card.png" alt="master-card">
        <img src="../assets/img/paypal.png" alt="paypal">
        <img src="../assets/img/visa.png" alt="visa">
      </div>
    </div>
    <a href="#"><i class="fas fa-arrow-up fa-sm"></i></a>
  </section>
</template>

<script>
export default {
  name: 'FooterBottom',

}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

  #footer-bottom {
    background-color: #202942;
    border-top: 1px solid #3C4858;
    position: relative;
    &>a {
      position: fixed;
      right: .5%;
      bottom: 20px;
      display: flex;
      width: 30px;
      height: 30px;
      color: $text-primary;
      background-color: $brand-secondary;
      border-radius: 5px;
      text-decoration: none;
      justify-content: center;
      align-items: center;  
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }

  .credits span {
    color: #E43F52;
  }
  .payment-terms {
    height: 25px;
    img {
      margin-left: 5px;
    }
  }

</style>