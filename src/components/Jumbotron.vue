<template>
  <section class="jumbotron">
    <a href="#"><i class="fas fa-cog"></i></a>
    <div class="container">
      <div class="jumbo-description w-50">
        <div>Development</div>
        <h1>A Complete Developer Toolset</h1>
        <div>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</div>
        <button class="btn btn-primary">Get Started</button>
        <button class="btn btn-secondary">Documentation</button>
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
    background-color: $brand-secondary;
    height: 600px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 70px 0;
    &>a {
      color: $brand-primary;
      width: 30px;
      height: 30px;
      padding: 7px;
      background-color: white;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      position: absolute;
      left: 0;
      top: 10%;
    }
  }

  .container {
    display: flex;
    align-items: center;
  }

  h1 {
    color: black;
    font-size: 2rem;
    width: 50%;
  }

  .jumbo-description {
    height: 100%;
    padding-top: 60px;
    div {
      color: $text-primary;
      margin: 30px 0;
      &:first-child {
        display: inline-block;
        background-color: $brand-tertiary;
        color: $brand-primary;
        padding: 4px 10px;
        border: 1px solid $border-primary;
        border-radius: 50px;
        font-size: 0.8rem;
        font-weight: bold;
      }
    }
    button {
      margin-right: 10px;
    }
  }

  .jumbo-image  {
    height: 100%;
    text-align: right;
  }
</style>