import { useContext } from "react"
import { ToggleSidePanel } from "../../context/ToggleSidePanelProvider"
import LeafletMap from "./LeafletMap"

export default () => {
    const { isToggleSidePanel } = useContext(ToggleSidePanel)

    return (
        <div className={`${isToggleSidePanel ? "w-[98%] transition-all" : "xl:w-2/3 md:w-1/2"} overflow-hidden relative 2xl:h-screen xl:h-[65em] md:h-screen`}>
            <LeafletMap />
        </div>
    )
}