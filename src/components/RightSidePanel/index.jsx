import { useContext } from "react"
import { ToggleSidePanel } from "../../context/ToggleSidePanelProvider"
import LeafletMap from "./LeafletMap"

export default () => {
    const { isToggleSidePanel } = useContext(ToggleSidePanel)

    return (
        <div className={`${isToggleSidePanel ? "w-[98%] transition-all" : "w-2/3"} h-[65em] overflow-hidden relative 2xl:h-screen`}>
            <LeafletMap />
        </div>
    )
}