import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"4393474aa80b4fa5a492bd7c213f17ab"
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

    get = (id:number) => {
        return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data)
    }

    getAll = () => {
        return axiosInstance.get<ApiResponse<T[]>>(this.endpoint).then(res => res.data)
    }
}


export default APIClient;
