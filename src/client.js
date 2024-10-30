import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.yumserver.com/15029/generic/",
    headers:{
        'Content-Type' : 'application/json'
    }
})

export default apiClient;