import { createContext, useState } from "react"

export const HomeContext = createContext({});

export default ({ children }) => {

    const [searchValue, setSearchValue] = useState("")

    return (
        <HomeContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </HomeContext.Provider>
    )
}