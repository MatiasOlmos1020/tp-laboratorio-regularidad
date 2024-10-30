<template>
    <div class="d-flex justify-content-center">
        <span>{{ msg }}</span>
        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <ul v-if="!loading && movies.length > 0" class="list-group">
                <li v-for="movie in movies" :key="movie.idcod"
                    class="list-group-item d-flex justify-content-between align-items-center">
                    <p class="mb-0">{{ movie.param1 }}</p>
                    <router-link :to="`/edit/${movie.idcod}`" >
                        <button class="btn btn-primary btn-sm">Edit</button>
                    </router-link>
                </li>
            </ul>
            <template v-else-if="loading && movies.length >0">
                <div class="mb-3 p-3 bg-light rounded shadow-sm">
                    <span>Cargando...</span>
                </div>
            </template>
            <template v-else>
                <div class="mb-3 p-3 bg-light rounded shadow-sm">
                    <span>No Hay peliculas cargadas</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { getAllMovies, deletMovie } from '../services/moviesService';

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
