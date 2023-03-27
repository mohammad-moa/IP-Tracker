import { MapContainer, Marker, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

export default ({ position, iconUrl, iconSize, zoom }) => {

    const customPinIcon = new L.Icon({
        iconUrl: iconUrl,
        iconSize: iconSize,
    })

    return (
        <>
            <MapContainer className="w-full h-[87em] z-0 2xl:h-screen" center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={position}
                    icon={customPinIcon}
                >
                </Marker>
            </MapContainer>
        </>
    )
}