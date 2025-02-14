import APIClient from "@/services/apiClient"
import { GameDetail } from "@/types/GameDetail";
import { useQuery } from "@tanstack/react-query"

const apiClient = new APIClient<GameDetail>("/games")

const useGame = (slug:string) => 
    useQuery({
        queryKey:["game",slug],
        queryFn:() => apiClient.get(slug),
        staleTime:1000 * 60 * 60 * 24
    })


export default useGame;