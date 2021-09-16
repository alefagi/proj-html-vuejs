<template>
  <section id="subscribe">
    <div class="container">
      <div class="section-title w-50">
        <h2>Want to be among the first to find out?</h2>
        <div>Start working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</div>
      </div>
      <div class="e-mail w-50">
        <input type="email" placeholder="Email Address">
        <button class="btn-primary">Get Started</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Subscribe',
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/sectionTitle.scss";

  #subscribe {
    margin-top: 60px;
  }

 .section-title {
    margin: 0 auto;
    text-align: center;
  }

  .e-mail {
    margin: 0 auto;
    display: flex;
    border: 1px solid $border-primary;
    border-radius: 50px;
    padding: 4px;
    input {
      border: none;
      margin-left: 20px;
    }
    button {
      border-radius: 50px;
      
    }
  }


</style>