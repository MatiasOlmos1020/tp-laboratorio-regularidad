<template>
    <form @submit.prevent="handleSubmit" class="p-4 bg-light rounded shadow-sm">
        <span>{{ msg }}</span>
        <template v-if="!loading">
            <div class="mb-3">
                <label class="form-label" for="title">Nombre</label>
                <input v-model="title" type="text" class="form-control" id="title">
            </div>
            <div class="mb-3">
                <label class="form-label">Puntuación</label>
                <div class="d-flex align-items-center gap-2">
                    <label v-for="i in 5" :key="i" class="form-check form-check-inline">
                        <input v-model="score" :value="i" type="radio" class="form-check-input" name="score">
                        <span class="form-check-label">{{ i }}</span>
                    </label>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label" for="synopsis">Sinopsis</label>
                <textarea v-model="synopsis" type="textbox" class="form-control" id="synopsis"></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
        </template>
        <template v-else>
            <div class="mb-3">
                <span>Cargando...</span>
            </div>
        </template>
    </form>
</template>

<script>
import { createMovie } from '../services/moviesService';

export default {
    data() {
        return {
            title: '',
            score: null,
            synopsis: '',
            msg: '',
            loading: false,
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.msg= '';
                this.loading = true;
                let data = {
                    "param1": this.title,
                    "param2": this.score.toString(),
                    "param3": this.synopsis
                }
                await createMovie(data)
                this.loading = false;
                this.msg = 'Se ha ingresado la pelicula correctamente'
            } catch (error) {
                this.loading = false;
                this.msg = 'Ha ocurrido un error mientras se cargaba la pelicula'
            }
        },
    },
}
</script>