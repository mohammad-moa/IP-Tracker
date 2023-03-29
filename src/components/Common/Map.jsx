import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

export default ({ position, iconUrl, iconSize, zoom, ...props }) => {

    const customPinIcon = new L.Icon({
        iconUrl: iconUrl,
        iconSize: iconSize,
    })

    const ChangeCenterClient = () => {
        const chnageMap = useMap();
        useEffect(() => {
            chnageMap.setView(position);
        }, [position]);
        return null;
    }

    return (
        <>
            <MapContainer {...props} center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ChangeCenterClient />
                <Marker
                    position={position}
                    icon={customPinIcon}
                >
                </Marker>
            </MapContainer>
        </>
    )
}