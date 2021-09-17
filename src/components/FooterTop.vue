<template>
  <section id="footer-top" class="mt-80">
    <div class="container">
      <div class="social">
        <div class="logo">
          <img src="../assets/img/logo-light.png" alt="logo-light">
        </div>
        <div>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</div>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="links-container">
        <div class="links-list" v-for="(list, index) in footerLinks" :key="index">
          <h4>{{ list.title }}</h4>
          <ul>
            <li v-for="(link, index) in list.links" :key="index">
              <a :href="link.url"><i class="fas fa-angle-right fa-sm"></i>{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="newsletter">
        <h4>Newsletter</h4>
        <div>Sign up and receive the latest tips via email.</div>
        <div>Write your email <span>*</span></div>
        <div class="your-email">
          <i class="far fa-envelope"></i>
          <span>Your email :</span>
          <input type="email" size="17">
        </div>
        <button class="btn"><span>Subscribe</span></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterTop',
  props: {
    footerLinks: Array,
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

  #footer-top {
    background-color: #202942;
    padding: 50px 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
    &>* {
      width: 30%;
    }
  }

  h4 {
    margin-bottom: 20px;
    color: white;
  }

  .logo {
    margin-bottom: 20px;
  }

  ul {
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        color: $text-primary;
        i {
          padding-right: 8px;
        }
      }
    }
  }

  .social-icons {
    display: flex;
    a {
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      height: 25px;
      width: 25px;
      margin-right: 5px;
      margin-top: 20px;
      border-radius: 5px;
      border: 1px solid $text-primary;
      color: $text-primary;
    }
  }

  .newsletter {
    width: 30%;
    span:first-child {
      color: #E43F52;
    }
    div:first-of-type {
      padding-bottom: 25px;
    }
    .your-email {
      display: flex;
      border-radius: 10px;
      background-color: #27314F;
      padding: 15px;
      margin: 15px 0;
      span {
        font-size: 0.9rem;
        margin-right: 3px;
      }
      input {
        border: none;
        margin-left: 5px;
        outline: none;
        background-color: #27314F;
        color: white;
      }
      i {
        margin-right: 12px;
        padding-top: 2px;
      }
    }
    button {
      border-radius: 5px;
      color: $brand-primary;
      padding: 14px 12px;
      background-color: #27314F;
      border: none;
      box-shadow: 1px 3px 10px rgba(233, 70, 73, .2);
      width: 100%;
    }
  }

  button span {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .links-container {
    display: flex;
    justify-content: space-around;
  }

</style>