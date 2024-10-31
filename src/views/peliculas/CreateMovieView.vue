<template>
    <form @submit.prevent="handleSubmit" class="p-4 bg-light rounded shadow-sm position-relative">
        <router-link :to="{ name: 'movies-list' }" class="btn-close position-absolute top-0 end-0 m-2"
            aria-label="Close"></router-link>
        <h4 class="mb-4 text-center">Crear Película</h4>
        <span>{{ msg }}</span>
        <template v-if="!loading">
            <div class="row">
                <div class="mb-3 col-12">
                    <label class="form-label" for="title">Nombre</label>
                    <input v-model="title" type="text" class="form-control" id="title"
                        placeholder="Introduce el nombre de la película" />
                </div>
                <div class="mb-3 col-12">
                    <label class="form-label">Puntuación</label>
                    <div class="d-flex align-items-center gap-2">
                        <label v-for="i in 5" :key="i" class="form-check form-check-inline">
                            <input v-model="score" :value="i" type="radio" class="form-check-input" name="score" />
                            <span class="form-check-label">{{ i }}</span>
                        </label>
                    </div>
                </div>
                <div class="mb-3 col-12">
                    <label class="form-label" for="synopsis">Sinopsis</label>
                    <textarea v-model="synopsis" class="form-control" id="synopsis"
                        placeholder="Escribe la sinopsis de la película"></textarea>
                </div>
                <div class="mb-3 col-12">
                    <label class="form-label">Actores</label>
                    <div class="d-flex gap-2 flex-wrap">
                        <span v-for="actor in allActors" :key="actor.idcod" @click="linkActor(actor.idcod)"
                            class="badge text-white p-2" :class="actors.includes(actor.idcod) ? 'bg-primary' : 'bg-secondary'">{{
                            actor.param1 }}
                        </span>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Crear Película</button>
        </template>
        <template v-else>
            <div class="mb-3 text-center">
                <span>Cargando...</span>
            </div>
        </template>
    </form>
</template>




<script>
import { createMovie } from '../../services/moviesService.js';
import { getAllActors } from '../../services/actorsService.js'

export default {
    data() {
        return {
            title: '',
            score: null,
            synopsis: '',
            actors: '',
            msg: '',
            loading: false,
            allActors: [],
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.msg = '';
                this.loading = true;
                let data = {
                    "param1": this.title,
                    "param2": this.score.toString(),
                    "param3": this.synopsis,
                    "param4": this.actors,
                }
                let res = await createMovie(data)
                console.log(res);
                this.loading = false;
                this.msg = 'Se ha ingresado la pelicula correctamente'
            } catch (error) {
                console.log(error);
                this.loading = false;
                this.msg = 'Ha ocurrido un error mientras se cargaba la pelicula'
            }
        },
        handleClose() {
            this.$router.push({ name: 'movies-list' });
        },
        linkActor(id) {
            let idsArray = this.actors.trim().split(" ");
            if (idsArray.includes(id)) {
                idsArray = idsArray.filter(item => item !== id);
            } else {
                idsArray.push(id);
            }
            this.actors = idsArray.join(" ");
        },
    },
    async created() {
        let res = await getAllActors();
        this.allActors = res;
    }
}
</script>