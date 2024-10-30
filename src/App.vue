<template>
  <div class="background">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary shadow-sm sticky-top">
      <div class="container-fluid d-flex justify-content-between">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <!-- <li class="nav-item">
              <router-link class="nav-link text-white" to="/">Inicio</router-link>
            </li> -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Películas
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" :to="{ name: 'movies-list' }">Lista de Películas</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" :to="{ name: 'movies-create' }">Nueva Película</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Actores
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" :to="{ name: 'actors-list' }">Lista de Actores</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" :to="{ name: 'actors-create' }">Nuevo Actor</router-link>
                </li>
              </ul>
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
