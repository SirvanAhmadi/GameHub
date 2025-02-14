import { create } from "zustand";



interface GameQueryStore {
    searchGames:string;
    selectedGenreId:number | null;
    selectedPlatformId:string | null;
    orderBy:string | null;

    setSearchGames: (searchText: string) => void;
    setSelectedGenreId: (genreId: number | null) => void;
    setSelectedPlatformId:(platformId: string | null) => void;
    setOrderBy: (sortOrder: string | null) => void;


    resetFilters: () => void;
}


const useGameQueryStore = create<GameQueryStore>((set) => ({
    searchGames:"",
    selectedGenreId:null,
    selectedPlatformId:null,
    orderBy:null,

    setSearchGames: (searchText) => set({
        searchGames:searchText
    }),

    setSelectedGenreId:(genreId) => set({
        selectedGenreId: genreId
    }),

    setOrderBy:(newOrderBy) => set({
        orderBy:newOrderBy
    }),

    setSelectedPlatformId:(platformId) => set({
        selectedPlatformId:platformId
    }),

      // Reset all filters to initial state
  resetFilters: () => set({
    searchGames: '',
    selectedGenreId: null,
    selectedPlatformId: null,
    orderBy: null
  })
}));


export default useGameQueryStore;