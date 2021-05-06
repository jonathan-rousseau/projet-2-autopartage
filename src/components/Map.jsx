import './Map.css';
import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import maptest from '../margueritemap.json';
import logocar from '../images/image_icon_map_marker.png';
import logolocal from '../images/png-marker-noir-local-removebg-preview.png';

const marks = L.icon({
  iconUrl: logocar,

  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
const localMarks = L.icon({
  iconUrl: logolocal,

  iconSize: [70, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

function Map() {
  const stations = maptest.features;

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={localMarks}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <div className="mainMap">
      <MapContainer center={[47.21746, -1.55764]} zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((station) => (
          <Marker
            position={station.geometry.coordinates.reverse()}
            icon={marks}
          >
            <Popup>
              <div className="titregras">{station.properties.nom} </div>
              <div className="dispotext">
                {station.properties.cp} <br />
                {station.properties.adresse} <br />
                {station.properties.ouverture} <br />
                {station.properties.tel} <br />
                <br />
              </div>
            </Popup>
          </Marker>
        ))}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
