<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary shadow-sm sticky-top">
        <div class="container-fluid d-flex justify-content-between">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link text-white" :to="{ name: 'home' }">Inicio</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Películas
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'movies-list' }">Lista de
                                    Películas</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'movies-create' }">Nueva
                                    Película</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Actores
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'actors-list' }">Lista de
                                    Actores</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'actors-create' }">Nuevo
                                    Actor</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>