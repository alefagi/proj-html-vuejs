<template>
  <nav>
    <div class="container">
      <div class="logo">
        <img src="../assets/img/logo-dark.png" alt="logo-dark">
      </div>
      <ul class="menu">
        <li v-for="(item, index) in navItems" :key="index">
          <a :href="item.url">
            {{ item.text }} <i class="fas fa-angle-down" v-if="item.text!='home'"></i>
          </a>
        </li>
      </ul>
      <div class="utils-icons">
        <a href="#"><i class="fas fa-search"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
        <a href="#"><i class="fab fa-stack-overflow"></i></a>
        <a href="#"><i class="far fa-user"></i></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    navItems: Array,
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

  nav {
    height: 56px;
    background-color: $brand-primary;
  } 
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    li {
      list-style-type: none;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;
      a {
        text-decoration: none;
        color: #3C4858;
        padding: 20px 20px;
        transition: .3s;
        &:hover {
          color: $brand-secondary;
        }
      }
    }
  }
  .utils-icons {
    display: flex;
    a {
      display: flex;
      text-decoration: none;
      height: 35px;
      width: 35px;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
      border-radius: 5px;
      box-shadow: 1px 3px 10px rgba(0, 0, 0, .2);
      color: $brand-secondary;
      background-color: $brand-primary;
      transition: .3s;
      &:hover {
        color: #fff;
        background-color: $brand-secondary;
      }
      &:first-child {
        color: #8492A6;
        box-shadow: none;
        background-color: transparent;
        &:hover {
          color: #3C4858;
          background-color: transparent; 
        }
      }
    }
  }


</style>