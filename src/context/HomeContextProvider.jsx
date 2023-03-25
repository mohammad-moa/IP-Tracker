import { createContext, useState } from "react"

export const HomeContext = createContext({});

export default ({ children }) => {

    const [searchValue, setSearchValue] = useState("")
    const [result, setResult] = useState("")

    return (
        <HomeContext.Provider value={{ searchValue, setSearchValue, result, setResult }}>
            {children}
        </HomeContext.Provider>
    )
}