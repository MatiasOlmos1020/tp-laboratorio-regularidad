import apiClient from "../client";

export async function createMovie(data) {
    try {
        const res = await apiClient.post('/peliculas', JSON.stringify(data));
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function getMovieByID(id) {
    try {
        let res = await apiClient.get(`/peliculas/${id}`);
        let idsArray = res.data.param4.trim().split(" ");
        res.data.param4 = idsArray

        return res.data;
    } catch (error) {
        return error
    }
}

export async function getAllMovies() {
    try {
        let res = await apiClient.get('/peliculas');
        res.data.forEach(element => {
            element.param4 = element.param4.trim().split(" ");
        });

        return res.data;
    } catch (error) {
        return error
    }
}

export async function editMovie(data) {
    try {
        const res = await apiClient.patch('/peliculas', JSON.stringify(data));

        return res.data;
    } catch (error) {
        return error;
    }
}

export async function deleteMovie(id) {
    try {
        const data = {
            data: {
                idcod: id
            }
        };
        const res = await apiClient.delete('/peliculas', data);
        return res.data;
    } catch (error) {
        return error
    }
}