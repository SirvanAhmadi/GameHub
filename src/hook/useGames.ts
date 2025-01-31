import APIClient from "@/services/apiClient";
import { Game } from "@/types/Game";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

const useGames = (genreId: number | null) =>
    useInfiniteQuery({
        queryKey: ["games",genreId],
        initialPageParam:1,
        queryFn: ({pageParam}) =>
          apiClient.getAll({
            params: {
              genres: genreId,
              page:pageParam,
              page_size:10
            },
          }),
          getNextPageParam:(lastPage,allPages) => {
            return lastPage.results.length > 0 ? allPages.length + 1 : undefined
          }
    })

    // useQuery({
    //     queryKey: ["games",genreId],
    //     queryFn: () =>
    //       apiClient.getAll({
    //         params: {
    //           genres: genreId,
    //         },
    //       }),
    //   });
export default useGames;
