import { useContext, useEffect, useState } from "react";
import Api from "../../api";
import { HomeContext } from "../../context/HomeContextProvider";
import Map from "../Common/Map";
import mapPinIcon from "./../../assets/images/map-pin-icon.svg"

export default () => {

    const { result } = useContext(HomeContext)

    const { isLoading, dataIP } = Api(result)

    const [position, setPosition] = useState([])

    useEffect(() => {
        if (dataIP.success) {
            setPosition([dataIP.latitude, dataIP.longitude])
        }
    }, [dataIP, isLoading])

    return (
        position.length > 0 && <Map
            className="w-full h-full z-0 2xl:h-screen"
            position={position}
            iconUrl={mapPinIcon}
            iconSize={[43, 43]}
            zoom={16}
        />
    )
}