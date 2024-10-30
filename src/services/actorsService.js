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

export async function deletActor(id) {
    try {
        const data = JSON.stringify({
            idcod: id
        })
        // console.log("body:")
        // console.log(data)
        //  console.log("intento con fetch");
          await fetch('https://api.yumserver.com/15029/generic/actores', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: data
          }).then(response => console.log(response.data));

        //  console.log("intento con axios");
        //  const res = await apiClient.delete('/actores', data);
        //  console.log(res);
        //  return res.data;

    } catch (error) {
        return error
    }
}