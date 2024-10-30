import { createRouter, createWebHistory } from "vue-router";
import CreateView from "../views/CreateMovieView.vue"
import ListMoviesView from "../views/ListMoviesView.vue";
import EditMovieView from "../views/EditMovieView.vue";

const routes = [
    
    {
        path: '/create',
        name: 'create',
        component: CreateView
    },
    {
        path: '/list',
        name: 'list',
        component: ListMoviesView
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditMovieView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router