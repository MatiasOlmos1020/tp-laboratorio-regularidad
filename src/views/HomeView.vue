<template>
    <div class="container my-4">
        <div class="d-flex flex-wrap gap-2 mb-4">
            <span v-for="actor in allActors" :key="actor.idcod" @click="filterByActor(actor.idcod)"
                class="badge bg-primary" :class="filter.includes(actor.idcod) ? 'bg-primary' : 'bg-secondary'">
                {{ actor.param1 }}
            </span>
        </div>
        <div class="row row-cols-1 row-cols-md-1 g-4">
            <template v-for="movie in allMovies" :key="movie.idcod">
                <div v-if="validateFilter(movie.param4)" class="col">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">{{ movie.param1 }}</h5>
                            <p class="card-text mb-1"><strong>Puntuación:</strong> {{ movie.param2 }}/5</p>
                            <p class="card-text text-muted">{{ movie.param3 }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { getAllActors } from '../services/actorsService.js'
import { getAllMovies } from '../services/moviesService.js';

export default {
    data() {
        return {
            allMovies: [],
            allActors: [],
            filter: []
        }
    },
    methods: {
        filterByActor(id) {
            if (this.filter.includes(id)) {
                this.filter = this.filter.filter(item => item !== id);
            } else {
                this.filter.push(id);
            }
        },
        validateFilter(idsArray) {
            let validation;
            idsArray = idsArray.trim().split(" ")
            if (this.filter.length > 0) {
                idsArray.forEach(element => {
                    validation = !this.filter.includes(element) ? false : true
                });
            } else { validation = true }
            return validation;
        }
    },
    async created() {
        this.allActors = await getAllActors();
        this.allMovies = await getAllMovies();
    }
}
</script>