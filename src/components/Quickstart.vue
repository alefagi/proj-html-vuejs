<template>
  <section id="quickstart" class="mt-60">
    <div class="container">
      <div class="section-title w-50">
        <h5>Quickstart</h5>
        <h2>Awesome isn't it? Let's dive in!</h2>
        <div>Start working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</div>
      </div>
      <div class="shell">
        <div class="packet-manager">
          <div>npm</div>
          <div>nuget</div>
          <div>spm</div>
          <div>github</div>
        </div>
        <div class="commands">
          <span>$</span> npm install <span>-g</span> claps.js
        </div>
      </div>
      <div class="solutions">
        <span><i class="far fa-check-circle"></i>Organize your data</span>
        <span><i class="far fa-check-circle"></i>Work with any team</span>
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

  .section-title {
    margin: 0 auto;
    text-align: center;
  }

  .shell {
    width: 50%;
    margin: 0 auto;
    margin-top: 60px;
    height: 100px;
    border-radius: 5px;
    padding: 20px;
    background-color: #27314F;    
  }

  .packet-manager {
    display: flex;
    background-color: #27314F;
    border-radius: 5px;
    div {
      width: 25%;
      height: 40px;
      background-color: #3C4858;
      color: white;
      text-align: center;
      line-height: 38px;
      border: 2px solid #3C4858;
      &:first-child {
        background-color: #27314F;
      }
    }
  }

  .commands {
    padding-top: 15px;
    span {
      color: #2ECA8B;
    }
  }

  .solutions {
    width: 50%;
    margin: 0 auto;
    padding-top: 20px;
    span {
      margin-right: 40px;
      i {
        color: #2ECA8B;
        margin-right: 8px;
      }
    }
  }
</style>