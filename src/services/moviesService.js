import apiClient from "../client";

export async function createMovie(data) {
    try {
        const res = await apiClient.post('/peliculas', JSON.stringify(data));
        console.log(res);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function getMovieByID(id){
    try {
        const res = await apiClient.get(`/peliculas/${id}`);
        return res.data;
    } catch (error) {
        return error
    }
}

export async function getAllMovies() {
    try {
        const res = await apiClient.get('/peliculas');
        return res.data;
    } catch (error) {
        return error
    }
}

export async function editMovie(data) {
    try {
        const res = await apiClient.patch('/peliculas', JSON.stringify(data));
        console.log(res);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function deleteMovie(id) {
    try {
        const data = {
            data:{
                idcod: id
            }
        };
          const res = await apiClient.delete('/peliculas', data);
          return res.data;
    } catch (error) {
        return error
    }
}