<template>
  <div class="background">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary shadow-sm sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand text-white" to="/">Movie Reviews</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" :to="{ name: 'movies-list' }">Lista de Películas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" :to="{ name: 'movies-create' }">Nueva Película</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <router-view />
      </div>
    </div>
  </div>
</template>



<style scoped>
  .background{
  background-color: #e5e5e5;

  }
</style>
