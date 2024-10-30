<template>
    <form @submit.prevent="handleSubmit" class="p-4 bg-light rounded shadow-sm position-relative">
        <router-link :to="{ name: 'actors-list' }" class="btn-close position-absolute top-0 end-0 m-2"
            aria-label="Close"></router-link>
        <h4 class="mb-4 text-center">Editar Actor</h4>
        <span>{{ msg }}</span>
        <template v-if="!loading">
            <div class="row">
                <div class="mb-3 col-12">
                    <label class="form-label" for="name">Nombre</label>
                    <input v-model="name" type="text" class="form-control" id="name"
                        placeholder="Introduce el nombre de la actor" />
                </div>
                <div class="mb-3 col-6">
                    <label class="form-label" for="birthday">Fecha de Nacimiento</label>
                    <input v-model="birthday" type="date" class="form-control" id="birthday" />
                </div>
                <div class="mb-3 col-6">
                    <label class="form-label" for="country">Nacionalidad</label>
                    <select v-model="country" class="form-select" id="country">
                        <option disabled value="">Selecciona la nacionalidad del actor</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="Canadá">Canadá</option>
                        <option value="Inglaterra">Inglaterra</option>
                        <option value="España">España</option>
                        <option value="Francia">Francia</option>
                        <option value="Italia">Italia</option>
                        <option value="Japón">Japón</option>
                        <option value="Corea del Sur">Corea del Sur</option>
                        <option value="India">India</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Guardar Cambios</button>
            <div class="mt-3">
                <button @click.prevent="showModal = true" class="btn btn-danger w-100">Eliminar Actor</button>
            </div>
        </template>
        <template v-else>
            <div class="mb-3 text-center">
                <span>Cargando...</span>
            </div>
        </template>
    </form>
    <ConfirmDeleteComponent :isOpen="showModal" message="Por favor, confirme que quiere eliminar el actor" @confirm="onConfirmDelete"
        @cancel="onCancelDelete"></ConfirmDeleteComponent>
</template>




<script>
import { getActorByID, deleteActor, editActor } from '../../services/ActorsService';
import ConfirmDeleteComponent from '../../components/ConfirmDeleteComponent.vue';

export default {
    data() {
        return {
            id: this.$route.params.id,
            name: '',
            birthday: '',
            country: '',
            msg: '',
            loading: false,
            showModal: false
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.msg = '';
                this.loading = true;
                let data = {
                    "idcod": this.id,
                    "param1": this.name,
                    "param2": this.formatToSpaces(this.birthday),
                    "param3": this.country,
                }
                await editActor(data);
                this.loading = false;
                this.msg = 'Se ha modificado el actor correctamente';
            } catch (error) {
                this.loading = false;
                this.msg = 'Ha ocurrido un error mientras se cargaba el actor';
            }
        },
        handleClose() {
            this.$router.push({ name: 'actors-list' })
        },
        formatToSpaces(dateStr) {
            return dateStr.replace(/-/g, ' ');
        },
        formatToDashes(dateStr) {
            return dateStr.replace(/ /g, '-');
        },
        async onConfirmDelete() {
            this.showModal = false;
            let res = await deleteActor(this.id);
            console.log(res);
            await this.handleClose()
        },
        onCancelDelete() {
            this.showModal = false;
        }
    },
    async created() {
        this.msg = '';
        this.loading = true;
        let res = await getActorByID(this.$route.params.id)
        this.name = res.param1;
        this.birthday = this.formatToDashes(res.param2);
        this.country = res.param3
        this.loading = false;
    },
    components: {
        ConfirmDeleteComponent
    },
}
</script>
