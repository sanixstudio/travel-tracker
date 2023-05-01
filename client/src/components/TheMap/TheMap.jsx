import React, { useEffect, useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";
import { TiLocation } from "react-icons/ti";
import "./style.css";
// import Header from "../Header/Header";
import TrackerForm from "../TrackerForm/TrackerForm";
import Popups from "../Popups/Popups";
import AppHeader from "../AppHeader/AppHeader";

function TheMap() {
  const [viewState, setViewState] = React.useState({
    longitude: -122.404,
    latitude: 37.78,
    zoom: 10,
  });

  const [allTrackers, setAllTrackers] = useState([]);
  const [showAllPopup, setShowAllPopup] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [formPostion, setFormPostion] = useState({ lat: 0, long: 0 });
  const [longitude, setLongitude] = useState(-122.404);
  const [latitude, setLatitude] = useState(37.78);

  const mapboxToken = import.meta.env.VITE_PUBLIC_KEY;

  useEffect(() => {
    const fetchTrackers = async () => {
      const res = await fetch(`${import.meta.env.VITE_HOST}`);
      const trackers = await res.json();
      setAllTrackers(trackers);
    };
    fetchTrackers();
  }, []);

  console.log(allTrackers);

  return (
    <>
      <Map
        reuseMaps
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={mapboxToken}
        style={{ width: "100vw", height: "100vh" }}
        onClick={(e) => {
          const { lat } = e.lngLat;
          const { lng } = e.lngLat;
          console.log(formPostion);
          console.log({ lat, long: lng });
          setFormPostion({ long: lng, lat });
          setFormIsOpen(!formIsOpen);
        }}
        cursor="default"
      >
        {/* <Header showAllPopup={showAllPopup} setShowAllPopup={setShowAllPopup} /> */}
        <AppHeader />
        <Marker
          longitude={formPostion.long}
          latitude={formPostion.lat}
          anchor="top-left"
        >
          <TiLocation color="red" size={24} />
        </Marker>
        {allTrackers
          ? allTrackers.map((tracker) => (
              <Popups tracker={tracker} showAllPopup={showAllPopup} />
            ))
          : null}
        {formIsOpen ? (
          <Popup
            latitude={formPostion.lat}
            longitude={formPostion.long}
            anchor="right"
            closeButton={true}
            onClose={() => setShowPopup(false)}
          >
            <TrackerForm
              setFormIsOpen={setFormIsOpen}
              formIsOpen={formIsOpen}
            />
          </Popup>
        ) : null}
        <ScaleControl />
        <NavigationControl position="bottom-right" />
        <FullscreenControl position="bottom-right" />
        <GeolocateControl
          position="bottom-right"
          onGeolocate={(e) => console.log(e.coords)}
        />
      </Map>
    </>
  );
}

export default TheMap;
