import { createRouter, createWebHistory } from "vue-router";
import CreateView from "../views/peliculas/CreateMovieView.vue"
import ListMoviesView from "../views/peliculas/ListMoviesView.vue";
import EditMovieView from "../views/peliculas/EditMovieView.vue";

const routes = [


    {
        path: '/movies',
        name: 'movies',
        children: [
            {
                path: '/movies/create',
                name: 'movies-create',
                component: CreateView
            },
            {
                path: '/movies/list',
                name: 'movies-list',
                component: ListMoviesView
            },
            {
                path: '/movies/edit/:id',
                name: 'movies-edit',
                component: EditMovieView
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router