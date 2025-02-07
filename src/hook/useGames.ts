import APIClient from "@/services/apiClient";
import { Game } from "@/types/Game";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

const useGames = (
  genreId: number | null,
  parentPlatformId: string | null,
  orderBy: string | null,
  searchGames: string
) =>
  useInfiniteQuery({
    queryKey: ["games", genreId, parentPlatformId, orderBy, searchGames],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: genreId,
          search: searchGames,
          parent_platforms: parentPlatformId,
          ordering: orderBy,
          page: pageParam,
          page_size: 10,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
