
import Map from "../Common/Map";
import mapPinIcon from "./../../assets/images/map-pin-icon.svg"

export default () => {

    const position = [29.61511993408203, 52.545249938964844];

    return (
        <Map
            position={position}
            iconUrl={mapPinIcon}
            iconSize={[43, 43]}
            zoom={16}
        />
    )
}