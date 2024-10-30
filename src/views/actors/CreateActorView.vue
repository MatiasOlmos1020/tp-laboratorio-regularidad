<template>
    <form @submit.prevent="handleSubmit" class="p-4 bg-light rounded shadow-sm position-relative">
        <router-link :to="{ name: 'actors-list' }" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"></router-link>
        <h4 class="mb-4 text-center">Nuevo Actor</h4>
        <span>{{ msg }}</span>
        <template v-if="!loading">
            <div class="mb-3">
                <label class="form-label" for="title">Nombre</label>
                <input v-model="title" type="text" class="form-control" id="title" placeholder="Introduce el nombre de la película" />
            </div>
            <div class="mb-3">
                <label class="form-label">Puntuación</label>
                <div class="d-flex align-items-center gap-2">
                    <label v-for="i in 5" :key="i" class="form-check form-check-inline">
                        <input v-model="score" :value="i" type="radio" class="form-check-input" name="score" />
                        <span class="form-check-label">{{ i }}</span>
                    </label>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label" for="synopsis">Sinopsis</label>
                <textarea v-model="synopsis" class="form-control" id="synopsis" placeholder="Escribe la sinopsis de la película"></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Enviar Actor</button>
        </template>
        <template v-else>
            <div class="mb-3 text-center">
                <span>Cargando...</span>
            </div>
        </template>
    </form>
</template>




<script>
import { createActor } from '../../services/actorsService';

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
                await createActor(data)
                this.loading = false;
                this.msg = 'Se ha cargado el actor correctamente'
            } catch (error) {
                this.loading = false;
                this.msg = 'Ha ocurrido un error mientras se cargaba el actor'
            }
        },
        handleClose(){
            this.$router.push({name: 'actors-list'})
        }
    },
}
</script>