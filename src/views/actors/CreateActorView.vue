<template>
    <form @submit.prevent="handleSubmit" class="p-4 bg-light rounded shadow-sm position-relative">
        <router-link :to="{ name: 'actors-list' }" class="btn-close position-absolute top-0 end-0 m-2"
            aria-label="Close"></router-link>
        <h4 class="mb-4 text-center">Nuevo Actor</h4>
        <span>{{ msg }}</span>
        <template v-if="!loading">
            <div class="row">
                <div class="mb-3 col-12">
                    <label class="form-label" for="name">Nombre</label>
                    <input v-model="name" type="text" maxlength="100" class="form-control" id="name"
                        placeholder="Introduce el nombre de el actor" />
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
            name: '',
            birthday: '',
            country: '',
            msg: '',
            loading: false,
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.msg = '';
                this.loading = true;
                let data = {
                    "param1": this.name,
                    "param2": this.formatToSpaces(this.birthday),
                    "param3": this.country
                }
                let res = await createActor(data)
                this.loading = false;
                this.msg = res
            } catch (error) {
                this.loading = false;
                this.msg = error
            }
        },
        handleClose() {
            this.$router.push({ name: 'actors-list' })
        },
        formatToSpaces(dateStr) {
            return dateStr.replace(/-/g, ' ');
        }
    },
}
</script>