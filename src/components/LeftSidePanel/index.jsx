import { useContext } from "react"
import { ToggleSidePanel } from "../../context/ToggleSidePanelProvider"
import Image from "../Common/Image"
import Footer from "./Footer"
import InfoIP from "./InfoIP"
import Search from "./Search"

import arrowLeftRightIcon from "./../../assets/images/arrows-left-right-icon.svg"

export default () => {

    const { isToggleSidePanel, setIsToggleSidePanel } = useContext(ToggleSidePanel)

    const toggleSidePanelHandler = () => setIsToggleSidePanel(!isToggleSidePanel)

    return (
        <div className={`${isToggleSidePanel ? "w-[2%] p-7 transition-all" : "xl:w-1/3 md:w-1/2 p-10"} relative bg-white z-10  2xl:h-screen xl:h-[65em] md:h-screen`}>
            <div className={`${isToggleSidePanel ? "hidden" : "block"}`}>
                <Search />
                <InfoIP />
                <Footer />
            </div>

            <div
                className="bg-white p-3 shadow-gray-light-shadow rounded-xl absolute right-0 bottom-[50px] translate-x-1/2 2xl:bottom-[90px]"
                role="button"
                onClick={toggleSidePanelHandler}
            >
                <Image
                    src={arrowLeftRightIcon}
                    alt="arrow-left-right-icon"
                    width={19}
                />
            </div>
        </div>
    )
}