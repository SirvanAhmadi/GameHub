import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";


interface Genre {
    id:number;
    name:string;
    image_background:string;
}

const apiClient = new APIClient<Genre>("/genres")

const useGenres = () => (
    useQuery({
        queryKey:["genres"],
        queryFn: apiClient.getAll,
        staleTime: 1000 * 60 * 60 * 24 * 7 // 7days
    })
);


export default useGenres;