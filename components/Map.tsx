import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

//TileLayer adds the attributions in the bottom right corner

const icon = L.icon({
    iconUrl: "/images/marker.png",
    iconSize: new L.Point(50, 65),
})

const polyline: [number, number][] = [ //the empty [] aligns with the [] containing the three arrays after the = sign. The [number, number] references the three arrays within.
    [49.25299, -123.00600],
    [49.25980, -123.01400],
    [49.25299, -123.04400],
]

const multiPolyline: [number, number][][] = [
    [
        [49.25299, -123.00800],
        [49.25980, -123.03300],
        [49.25299, -123.07400],
    ],
    [
        [49.25299, -123.00800],
        [49.25555, -123.03300],
        [49.25777, -123.07400],
    ]
]

const redOptions = { color: 'red' }
const orangeOptions = { color: 'orange' }
const fillBlueOptions = { color: 'blue' }

const center: [number, number] = [49.25299, -123.00600]

const Map = () => {
    return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/pjiang604/leaflet-map"> By Patricia Jiang</a> contributors' //When saving on gitbuh, put the github repo link in the href
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
                position={[49.25299, -123.00800]}
                icon={icon}
            >
                <Popup>
                    BCIT
                </Popup>
            </Marker>

            <Polyline
                pathOptions={redOptions}
                positions={polyline}
            />
            <Polyline
                pathOptions={orangeOptions}
                positions={multiPolyline}
            />

            <Circle
                center={center}
                pathOptions={fillBlueOptions}
                radius={200}
            />

            <CircleMarker
            center={[49.25299, -123.01650]}
            pathOptions={redOptions}
            radius={20}
            >
                <Popup>
                    Popup in CircleMarker
                </Popup>

            </CircleMarker>
        </MapContainer>
    )

}

export default Map;