<template>
    <form @submit.prevent="handleSubmit" class="p-4 bg-light rounded shadow-sm position-relative">
        <router-link :to="{ name: 'movies-list' }" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"></router-link>
        <h4 class="mb-4 text-center">Editar Película</h4>
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
            <button type="submit" class="btn btn-primary w-100">Guardar Cambios</button>
            <div class="mt-3">
                <button @click.prevent="showModal = true" class="btn btn-danger w-100">Eliminar Película</button>
            </div>
        </template>
        <template v-else>
            <div class="mb-3 text-center">
                <span>Cargando...</span>
            </div>
        </template>
    </form>
    <ConfirmDeleteComponent :isOpen="showModal" message="Por favor, confirme que quiere eliminar la Pelicula" @confirm="onConfirmDelete"
        @cancel="onCancelDelete"></ConfirmDeleteComponent>
</template>




<script>
import { getMovieByID, deleteMovie, editMovie } from '../../services/moviesService.js';
import { getAllActors } from '../../services/actorsService.js'
import ConfirmDeleteComponent from '../../components/ConfirmDeleteComponent.vue';

export default {
    data() {
        return {
            id: this.$route.params.id,
            title: '',
            score: null,
            synopsis: '',
            allActors: '',
            msg: '',
            loading: false,
            showModal: false,
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.msg = '';
                this.loading = true;
                let data = {
                    "idcod": this.id,
                    "param1": this.title,
                    "param2": this.score.toString(),
                    "param3": this.synopsis,
                    "param4": this.actors,
                }
                await editMovie(data)
                this.loading = false;
                this.msg = 'Se ha modificado la pelicula correctamente'
            } catch (error) {
                this.loading = false;
                this.msg = 'Ha ocurrido un error mientras se cargaba la pelicula'
            }
        },
        handleClose() {
            this.$router.push({ name: 'movies-list' })
        },
        async onConfirmDelete() {
            this.showModal = false;
            await deleteMovie(this.id);
            this.handleClose()
        },
        onCancelDelete() {
            this.showModal = false;
        }
    },
    async created() {
        let actorsRes = await getAllActors();
        this.allActors = actorsRes;

        this.msg = '';
        this.loading = true;
        let moviesRes = await getMovieByID(this.$route.params.id)
        console.log(moviesRes);
        this.title = moviesRes.param1;
        this.score = moviesRes.param2;
        this.synopsis = moviesRes.param3;
        this.allActors = moviesRes.param4;
        this.loading = false;
    },
    components: {
        ConfirmDeleteComponent
    },
}
</script>
