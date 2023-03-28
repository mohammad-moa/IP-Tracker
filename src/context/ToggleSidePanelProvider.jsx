import { createContext, useState } from "react"

export const ToggleSidePanel = createContext({})

export default ({ children }) => {

    const [isToggleSidePanel, setIsToggleSidePanel] = useState(false);

    return (
        <ToggleSidePanel.Provider value={{ isToggleSidePanel, setIsToggleSidePanel }}>
            {children}
        </ToggleSidePanel.Provider>
    )
}