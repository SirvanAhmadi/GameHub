import { GameQueryContextType, GameQueryContext, GameQuery } from "@/context/MyContext"
import { ReactNode, useState } from "react"

interface Props {
    children:ReactNode;
}

const MyProvider = ({children}:Props) => {
    const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)

    const contextValue: GameQueryContextType = {
        gameQuery,
        setGameQuery
    }

  return (
    <GameQueryContext.Provider value={contextValue}>
        {children}
    </GameQueryContext.Provider>
  )
}

export default MyProvider