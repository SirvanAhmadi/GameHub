import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";



const useData = <T>(endpoint:string,optionalSegment= "",id:string | number,mode:'multi' | 'single') => useQuery({
    queryKey:[id,optionalSegment],
    queryFn:() => {
        const apiClient = new APIClient<T>(endpoint)
        
        if (mode === 'single') {    
            if(optionalSegment){
                return apiClient.get(id,optionalSegment)
            } else {
                return apiClient.get(id)
            }
        } else if (mode === "multi") {
            if(optionalSegment){
                return apiClient.getAll({
                    params:{
                        page:1,
                        page_size:4
                    }
                },optionalSegment,id)
            } else {
                return apiClient.getAll({
                    params:{
                        page:1,
                        page_size:4
                    }
                },optionalSegment,id)
            }
        }
    }
})

export default useData;