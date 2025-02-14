import React from "react";


export interface GameQuery {
    searchGames:string;
    selectedGenreId:number | null;
    selectedPlatformId:string | null;
    orderBy:string | null;
}

export interface GameQueryContextType{
    gameQuery: GameQuery;
    setGameQuery:(value:GameQuery) => void;
}


export const GameQueryContext = React.createContext<GameQueryContextType | undefined>(undefined);