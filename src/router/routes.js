import { createRouter, createWebHistory } from "vue-router";
import CreateMoviesView from "../views/peliculas/CreateMovieView.vue"
import ListMoviesView from "../views/peliculas/ListMoviesView.vue";
import EditMovieView from "../views/peliculas/EditMovieView.vue";
import CreateActorsView from "../views/actors/CreateActorView.vue"
import ListActorsView from "../views/actors/ListActorsView.vue";
import EditActorView from "../views/actors/EditActorView.vue";
import FeedView from   "../views/FeedView.vue"

const routes = [

    {
        path: '/',
        name: 'home',
        component: FeedView
    },
    {
        path: '/movies',
        name: 'movies',
        children: [
            {
                path: '/movies/create',
                name: 'movies-create',
                component: CreateMoviesView
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
    {
        path: '/actors',
        name: 'actors',
        children: [
            {
                path: '/actors/create',
                name: 'actors-create',
                component: CreateActorsView
            },
            {
                path: '/actors/list',
                name: 'actors-list',
                component: ListActorsView
            },
            {
                path: '/actors/edit/:id',
                name: 'actors-edit',
                component: EditActorView
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router