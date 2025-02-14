import axios, { AxiosRequestConfig } from "axios";


const axiosInstance = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"1a02a3b2d4d5415db2d245aafe8e32c5"
    }
});

interface ApiResponse<T> {
    count:number;
    results: T
}

class APIClient<T> {
    endpoint:string

    constructor(endpoint:string) {
        this.endpoint = endpoint
    }

    get = (id:number | string,optionalSegment = "") => {
        return axiosInstance.get<T>(this.endpoint + "/" + id + optionalSegment).then(res => res.data)
    }

    getAll = (configObj:AxiosRequestConfig,optionalSegment = "",id = "") => {
        if (id){
            id = `/${id}`
        }
        return axiosInstance.get<ApiResponse<T[]>>(this.endpoint + id + optionalSegment,configObj).then(res => res.data)
    }
}


export default APIClient;
