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

export async function deletMovie(id) {
    try {
        const data = JSON.stringify({
            idcod: id
        })
        // console.log("body:")
        // console.log(data)
        //  console.log("intento con fetch");
          await fetch('https://api.yumserver.com/15029/generic/peliculas', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: data
          }).then(response => console.log(response.data));

        //  console.log("intento con axios");
        //  const res = await apiClient.delete('/peliculas', data);
        //  console.log(res);
        //  return res.data;

    } catch (error) {
        return error
    }
}