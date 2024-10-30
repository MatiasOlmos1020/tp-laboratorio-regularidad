<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
}
</script>

<style scoped>
div {
  background-color: #e5e5e5;
}
</style>