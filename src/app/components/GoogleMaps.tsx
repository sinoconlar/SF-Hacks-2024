'use client'; 

import React, { useEffect, useRef, useState } from "react";
import { Loader } from '@googlemaps/js-api-loader';

interface Location {
    lat: number;
    lng: number;
}

interface MarkerData {
    position: Location;
    info: string;
}

const GoogleMaps: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [markerData, setMarkerData] = useState<MarkerData[]>([]);
    const [selectedMarkerInfo, setSelectedMarkerInfo] = useState<string>("");

    useEffect(() => {
        const initializeMap = async () => {
            try {
                const loader = new Loader({
                    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                    version: 'quarterly',
                });

                const { Map } = await loader.importLibrary('maps');

                // Coordinates of SF State
                const locationInMap: Location = {
                    lat: 37.715460004147,
                    lng: -122.47937209319166,
                };

                const options: google.maps.MapOptions = {
                    center: locationInMap,
                    zoom: 11,
                    mapId: 'NEXT_MAPS_TUTS',
                };

                const map = new google.maps.Map(mapRef.current as HTMLDivElement, options);

                // Array of marker data objects
                const markers: MarkerData[] = [
                  {
                      position: { lat: 37.785289596506324, lng: -122.41171917566776 },
                      info: "Glide Memorial Church"
                  },
                  {
                      position: { lat: 37.72698158852792, lng: -122.3887127333399 },
                      info: "Mother Brown's Dining Room"
                  },
                  {
                    position: { lat: 37.782025182772465, lng: -122.41258811799769 },
                    info: "St. Anthony’s Free Clothing Program"
                  },
                  {
                    position: { lat: 37.78271077851882, lng: -122.40081742964658 },
                    info: "South of Market Family Resource Center"
                  },
                  // Add more marker data objects as needed
              ]; 

                setMarkerData(markers);

                // Create markers and info windows
                markers.forEach(markerData => {
                    const marker = new google.maps.Marker({
                        map: map,
                        position: markerData.position,
                    });

                    const infoWindow = new google.maps.InfoWindow({
                        content: `<div>${markerData.info}</div>`
                    });

                    marker.addListener("click", () => {
                        setSelectedMarkerInfo(markerData.info);
                        infoWindow.open(map, marker);

                        // Zoom in when marker is clicked
                        map.setZoom(15); // Adjust zoom level as needed
                        map.setCenter(marker.getPosition() as google.maps.LatLng);
                    });
                });
            } catch (error) {
                console.error('Error loading Google Maps:', error);
            }
        };

        initializeMap();
    }, []);

    return (
        <div>
            <div className="h-[500px]" ref={mapRef}>Google Maps</div>
            <div>{selectedMarkerInfo}</div>
        </div>
    );
};

export default GoogleMaps;
