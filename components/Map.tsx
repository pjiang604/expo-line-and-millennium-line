import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'


const icon = L.icon({
    iconUrl: "/images/marker.png",
    iconSize: new L.Point(25, 32.5),
    iconAnchor: [12.5, 32.5],
})

const markerPositions: { name: string, coordinates: [number, number] }[] = [
    { name: "VCC-Clark", coordinates: [49.2659, -123.0790] }, //VCC Clark //MILLENNIUM
    { name: "Commercial-Broadway", coordinates: [49.2626, -123.0692] }, //Broadway
    { name: "Renfrew", coordinates: [49.2589, -123.0454] }, // Renfrew
    { name: "Rupert", coordinates: [49.2609, -123.0329] }, // Rupert
    { name: "Gilmore", coordinates: [49.2650, -123.0136] }, // Gilmore
    { name: "Brentwood Town Centre", coordinates: [49.2682, -123.0006] }, // Brentwood
    { name: "Holdom", coordinates: [49.26469, -122.98222] }, // Holdom
    { name: "Sperling-Burnaby Lake", coordinates: [49.2592, -122.9640] }, // Sperling
    { name: "Lake City Way", coordinates: [49.25458, -122.93903] }, // Lake City
    { name: "Production Way-University", coordinates: [49.2534, -122.9181] }, // Production Way
    { name: "Lougheed Town Centre", coordinates: [49.24846, -122.89702] }, // Lougheed
    { name: "Burquitlam", coordinates: [49.2613, -122.8899] }, // Burquitlam
    { name: "Moody Centre", coordinates: [49.2780, -122.8460] }, // Moody
    { name: "Inlet Centre", coordinates: [49.277222, -122.827778] }, // Inlet
    { name: "Coquitlam Central", coordinates: [49.273889, -122.8] }, // Coquitlam
    { name: "Lincoln", coordinates: [49.280425, -122.793915] }, // Lincoln
    { name: "Lafarge Lake-Douglas", coordinates: [49.28556, -122.79167] }, // Lafarge
    { name: "Waterfront", coordinates: [49.285833, -123.111667] }, //Waterfront //EXPO PRODUCTION WAY
    { name: "Burrard", coordinates: [49.285616, -123.120157] }, //Burrard
    { name: "Granville", coordinates: [49.28275, -123.116639] }, //Granville
    { name: "Stadium-Chinatown", coordinates: [49.279444, -123.109444] }, //Chinatown
    { name: "Main Street-Science World", coordinates: [49.273114, -123.100348] }, //MainSt
    // [49.2625, -123.068889], //Broadway
    { name: "Nanaimo", coordinates: [49.248184, -123.05564] }, //Nanaimo
    { name: "29th Avenue", coordinates: [49.244084, -123.045931] }, //29th Ave
    { name: "Jouce-Collingwood", coordinates: [49.23835, -123.031704] }, //Joyce
    { name: "Patterson", coordinates: [49.22967, -123.012376] }, //Patterson
    { name: "Metrotown", coordinates: [49.225463, -123.003182] }, //Metro
    { name: "Royal Oak", coordinates: [49.220004, -122.988381] }, //Royal Oak
    { name: "Edmonds", coordinates: [49.212054, -122.959226] }, //Edmonds
    { name: "22nd Street", coordinates: [49.2, -122.949167] }, //22nd St
    { name: "New Westminster", coordinates: [49.201354, -122.912716] }, //New West
    // [49.20476, -122.906161], //Columbia
    { name: "Sapperton", coordinates: [49.22443, -122.88964] }, //Sapperton
    { name: "Braid", coordinates: [49.23322, -122.88283] }, //Braid
    // { name: "Commercial-Broadway", coordinates: [49.24846, -122.89702] }, //Lougheed
    // { name: "Commercial-Broadway", coordinates: [49.25337, -122.91815] }, //Production Way
    { name: "Columbia", coordinates: [49.20476, -122.906161] }, //Columbia //EXPO KING GEORGE
    { name: "Scott Road", coordinates: [49.204444, -122.874167] }, //Scott Rd
    { name: "Gateway", coordinates: [49.198945, -122.850559] }, //Gateway
    { name: "Surrey Central", coordinates: [49.189473, -122.847871] }, //Surrey
    { name: "King George", coordinates: [49.1827, -122.8446] }, //King George
]

const polyline: [number, number][] = [
    //Millennium line
    [49.2659, -123.0790], //VCC Clark
    [49.2626, -123.0692], //Broadway
    [49.2589, -123.0454], // Renfrew
    [49.2609, -123.0329], // Rupert
    [49.2650, -123.0136], // Gilmore
    [49.2682, -123.0006], // Brentwood
    [49.26469, -122.98222], // Holdom
    [49.2592, -122.9640], // Sperling
    [49.25458, -122.93903], // Lake City
    [49.2534, -122.9181], // Production Way
    [49.24846, -122.89702], // Lougheed
    [49.2613, -122.8899], // Burquitlam
    [49.2780, -122.8460], // Moody
    [49.277222, -122.827778], // Inlet
    [49.273889, -122.8], // Coquitlam
    [49.280425, -122.793915], // Lincoln
    [49.28556, -122.79167], // Lafarge
]


const multiPolyline: [number, number][][] = [
    [ //Expo King George
        [49.285833, -123.111667], //Waterfront
        [49.285616, -123.120157], //Burrard
        [49.28275, -123.116639], //Granville
        [49.279444, -123.109444], //Chinatown
        [49.273114, -123.100348], //MainSt
        [49.2625, -123.068889], //Broadway
        [49.248184, -123.05564], //Nanaimo
        [49.244084, -123.045931], //29th Ave
        [49.23835, -123.031704], //Joyce
        [49.22967, -123.012376], //Patterson
        [49.225463, -123.003182], //Metro
        [49.220004, -122.988381], //Royal Oak
        [49.212054, -122.959226], //Edmonds
        [49.2, -122.949167], //22nd St
        [49.201354, -122.912716], //New West
        [49.20476, -122.906161], //Columbia
        [49.22443, -122.88964], //Sapperton
        [49.23322, -122.88283], //Braid
        [49.24846, -122.89702], //Lougheed
        [49.25337, -122.91815], //Production Way


    ],
    [ //Expo Production Way
        [49.20476, -122.906161], //Columbia
        [49.204444, -122.874167], //Scott Rd
        [49.198945, -122.850559], //Gateway
        [49.189473, -122.847871], //Surrey
        [49.1827, -122.8446], //King George
    ]
]

const yellowOptions = { color: '#fcba03' }
const blueOptions = { color: '#666ff2' }

const Map = () => {
    return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/pjiang604/expo-line-and-millennium-line"> By Patricia Jiang</a> contributors' //When saving on gitbuh, put the github repo link in the href
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markerPositions && markerPositions.map((i, index) => {
                return (
                    <Marker
                        position={i.coordinates}
                        icon={icon}
                        key={index}
                    >
                        <Popup>
                            {i.name}
                        </Popup>
                    </Marker>

                )
            })}

            <Polyline
                pathOptions={yellowOptions}
                positions={polyline}
                weight={6}
            />

            <Polyline
                pathOptions={blueOptions}
                positions={multiPolyline}
            />
        </MapContainer>
    )

}

export default Map;