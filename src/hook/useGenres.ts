import APIClient from "@/services/apiClient";
import { Genre } from "@/types/Genre";
import { useQuery } from "@tanstack/react-query";




const apiClient = new APIClient<Genre>("/genres")

const useGenres = () => (
    useQuery({
        queryKey:["genres"],
        queryFn: apiClient.getAll,
        staleTime: 1000 * 60 * 60 * 24 * 7 // 7days
    })
);


export default useGenres;