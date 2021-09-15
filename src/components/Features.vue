<template>
  <section id="features">
    <div class="container">
      <div class="title w-50">
        <h2>Key Features</h2>
        <div>Start working with <span>Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</div>
      </div>
      <div class="key">
        <div class="card">
          <i class="fas fa-layer-group"></i>
          <i class="fas fa-expand-arrows-alt"></i>
          <i class="fas fa-expand"></i>
          <i class="fas fa-mobile-alt"></i>
          <h5>Modular</h5>
          <div class="card-text"></div>
          <a href="#">Read More <i class="fas fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
  #features {
    height: 400px;
  }

  .container {
    height: 100%;
  }

  .key {
    display: flex;
  }

  .card {
    width: 25%;
    border: 1px solid $border-primary;
  }
</style>