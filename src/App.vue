<template>
  <div class="background">
    <NavBarComponent></NavBarComponent>
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
export default{
  components:{
    NavBarComponent
  }
}
</script>

<style scoped>
.background {
  background-color: #e5e5e5;

}

@media (min-width: 992px) {
  .navbar-nav {
    justify-content: center;
    width: 100%;
  }
}
</style>
