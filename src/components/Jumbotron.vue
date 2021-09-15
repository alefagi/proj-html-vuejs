<template>
  <section class="jumbotron">
    <div class="container">
      <div class="jumbo-description w-50">
        <div>Development</div>
        <h1>A Complete Developer Toolset</h1>
        <div>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</div>
        <button class="btn-primary">Get Started</button>
        <button class="btn-secondary">Documentation</button>
        <div>Current Version: v2.6.0</div>
      </div>
      <div class="jumbo-image w-50">
        <img src="../assets/img/about.png" alt="about">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

  .jumbotron {
    background-color: $brand-primary;
    height: 500px;
    display: flex;
    align-items: center;
  }

  .container {
    height: 70%;
    display: flex;
    align-items: center;
  }

  h1 {
    color: black;
  }

  .jumbo-description div {
    color: $text-primary;
    margin: 30px 0;
    &:first-child {
      display: inline-block;
      background-color: $brand-primary;
      color: $brand-secondary;
      padding: 4px 10px;
      border: 1px solid $border-primary;
      border-radius: 50px;
      font-weight: bold;
    }
  }

  .jumbo-description button {
    margin-right: 10px;
  }

  .jumbo-image  {
    height: 100%;
    text-align: center;
  }






</style>