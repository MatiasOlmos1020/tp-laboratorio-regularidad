<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="mb-0 text-center">Lista de Películas</h4>
                <router-link :to="{ name: 'movies-create' }">
                    <button class="btn btn-success">Nueva Película</button>
                </router-link>
            </div>
            <span>{{ msg }}</span>
            <div class="overflow-auto" style="max-height: 70vh;">
                <ul v-if="!loading && movies.length > 0" class="list-group">
                    <li v-for="movie in movies" :key="movie.idcod" class="list-group-item d-flex justify-content-between align-items-center">
                        <p class="mb-0">{{ movie.param1 }}</p>
                        <router-link :to="{ name: 'movies-edit', params: { id: movie.idcod } }">
                            <button class="btn btn-primary btn-sm">Editar</button>
                        </router-link>
                    </li>
                </ul>
                <template v-else-if="loading && movies.length == 0">
                    <div class="mb-3 p-3 bg-light rounded shadow-sm text-center">
                        <span>Cargando...</span>
                    </div>
                </template>
                <template v-else>
                    <div class="mb-3 p-3 bg-light rounded shadow-sm text-center">
                        <span>No hay películas cargadas</span>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>




<script>
import { getAllMovies } from '../../services/moviesService';

export default {
    data() {
        return {
            movies: [],
            loading: false,
            msg: '',
        }
    },
    methods: {
        async getMovies() {
            try {
                this.loading = true;
                const res = await getAllMovies();
                this.movies = res
                this.msg = ''
                this.loading = false;
            } catch (error) {
                this.msg = 'Error al cargar las peliculas'
                this.loading = false;
            }

        }
    },
    async created() {
        await this.getMovies();
    },
}
</script>
