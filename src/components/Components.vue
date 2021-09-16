<template>
  <section id="components">
    <div class="container">
      <div class="description w-50">
        <div class="section-title">
          <h2>Build tools and extensive documention</h2>
          <div>You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</div>
        </div>
        <ul>
          <li><i class="far fa-check-circle"></i>Digital Marketing Solutions for Tomorrow</li>
          <li><i class="far fa-check-circle"></i>Our Talented & Experienced Marketing Agency</li>
          <li><i class="far fa-check-circle"></i>Create your own skin to match your brand</li>
        </ul>
        <button class="btn-primary">Read More<i class="fas fa-arrow-right"></i></button>
      </div>
      <div class="components-image w-50">
        <img src="../assets/img/1.png" alt="1">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Components',
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/sectionTitle.scss";

  #components {
    padding-top: 80px;
  }

  .container {
    display: flex;    
  }

  .description {
    padding-top: 50px;
  }

  ul {
    padding: 20px 0;
    li {
      list-style-type: none;
      i {
        color: $brand-secondary;
        margin-right: 8px;
      }
    }
  }

  button i {
    margin-left: 10px;
  }

  .components-image {
    text-align: right;
    img {
      width: 80%;
    }
  }
  



</style>