import { Wrapper } from "@googlemaps/react-wrapper"
import { useState, useEffect } from "react"

const Map = ({ center, zoom, markers, ...props }) => {
    const ref = React.useRef(null)
    const [map, setMap] = useState()

    useEffect(() => {
        markers?.forEach(markerData => {
            const newMarker = new window.google.maps.Marker()
            newMarker.setOptions({
                position: markerData,
                map,
                title: "map"
            })
        })
    }, [map, markers])

    return <div ref={ref} id="map" {...props} />
}

const GoogleMap = ({ children, showMarker = false, className, ...restProps }) => {
    const [currentLocatio, setLocation] = useState({ lat: 0, lng: 0 })
    useEffect(() => {
        navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
            const pos = { lat, lng }
            setLocation(pos)
        })
    }, [])

    const apikey = process.env.GOOGLE_MAPS_API

    return (
        <Wrapper apikey={apikey}>
            <Map
                center={currentLocatio}
                zoom={3}
                className={className}
                markers={showMarker ? [currentLocatio] : []}
                {...restProps}
            />
        </Wrapper>
    )
}

export { GoogleMap }