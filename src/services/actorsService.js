import apiClient from "../client";

export async function createActor(data) {
    try {
        const res = await apiClient.post('/actores', JSON.stringify(data));
        console.log(res);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function getActorByID(id){
    try {
        const res = await apiClient.get(`/actores/${id}`);
        return res.data;
    } catch (error) {
        return error
    }
}

export async function getAllActors() {
    try {
        const res = await apiClient.get('/actores');
        return res.data;
    } catch (error) {
        return error
    }
}

export async function editActor(data) {
    try {
        const res = await apiClient.patch('/actores', JSON.stringify(data));
        console.log(res);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function deleteActor(id) {
    try {
        const data = {
            data:{
                idcod: id
            }
        };
          const res = await apiClient.delete('/actores', data);
          return res.data;

    } catch (error) {
        return error
    }
}