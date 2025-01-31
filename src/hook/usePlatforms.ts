import APIClient from "@/services/apiClient";
import { Platform } from "@/types/Platform";
import { useQuery } from "@tanstack/react-query";




const apiClient = new APIClient<Platform>("/platforms")

const usePlatforms = () => (
    useQuery({
        queryKey:["platforms"],
        queryFn: apiClient.getAll,
        staleTime: 1000 * 60 * 60 * 24 * 7 // 7days
    })
);


export default usePlatforms;