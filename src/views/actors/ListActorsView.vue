<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="mb-0 text-center">Lista de Actores</h4>
                <router-link :to="{ name: 'actors-create' }">
                    <button class="btn btn-success">Nuevo Actor</button>
                </router-link>
            </div>
            <span>{{ msg }}</span>
            <div class="overflow-auto" style="max-height: 70vh;">
                <ul v-if="!loading && actors.length > 0" class="list-group">
                    <li v-for="actor in actors" :key="actor.idcod"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        <p class="mb-0">{{ actor.param1 }}</p>
                        <router-link :to="{ name: 'actors-edit', params: { id: actor.idcod } }">
                            <button class="btn btn-primary btn-sm">Editar</button>
                        </router-link>
                    </li>
                </ul>
                <template v-else-if="loading && actors.length == 0">
                    <div class="mb-3 p-3 bg-light rounded shadow-sm text-center">
                        <span>Cargando...</span>
                    </div>
                </template>
                <template v-else>
                    <div class="mb-3 p-3 bg-light rounded shadow-sm text-center">
                        <span>No hay actores cargados</span>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>




<script>
import { getAllActors } from '../../services/actorsService';

export default {
    data() {
        return {
            actors: [],
            loading: false,
            msg: '',
        }
    },
    methods: {
        async getActors() {
            try {
                this.loading = true;
                const res = await getAllActors();
                this.actors = res
                this.msg = ''
                this.loading = false;
            } catch (error) {
                this.msg = 'Error al cargar los actores'
                this.loading = false;
            }

        }
    },
    async created() {
        await this.getActors();
    },
}
</script>
