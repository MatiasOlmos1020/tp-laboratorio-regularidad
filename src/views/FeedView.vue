<template>
    <div class="container my-4">
        <div class="d-flex flex-wrap gap-2 mb-4">

            <span class="badge bg-primary">Leonardo DiCaprio</span>
            
        </div>

        <div class="row row-cols-1 row-cols-md-1 g-4">

            <div class="col">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Inception</h5>
                        <p class="card-text mb-1"><strong>Puntuación:</strong> 9/10</p>
                        <p class="card-text text-muted">Una mente brillante con un oscuro pasado es reclutada para
                            entrar en los sueños de otros y robar secretos corporativos.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import {getAllActors} from '../services/actorsService.js'

export default{
    data(){
        return{
            allMovies: [],
            allActors: [],
        }
    },
    async created(){

    }
}
</script>