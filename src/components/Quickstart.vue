<template>
  <section id="quickstart">
    <div class="container">
      <div class="section-title w-50">
        <h5>Quickstart</h5>
        <h2>Awesome isn't it? Let's dive in!</h2>
        <div>Start working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</div>
      </div>
      <div class="shell">
        <div>npm</div>
        <div>nuget</div>
        <div>spm</div>
        <div>github</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: 'Quickstart',
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/sectionTitle.scss";

  #quickstart {
    padding-top: 60px;
  }

  .section-title {
    margin: 0 auto;
    text-align: center;
  }

  .shell {
    width: 50%;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    height: 100px;
    background-color: #27314F;
    border-radius: 5px;
    color: white;
    padding: 20px;
    div {
      width: 25%;
      height: 40px;
      background-color: #3C4858;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
      &:first-child {
        background-color: #27314F;
        border: 2px solid #3C4858;
        line-height: 38px;
      }
    }
  }
</style>