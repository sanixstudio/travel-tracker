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
import TrackerForm from "../TrackerForm/TrackerForm";
import Popups from "../Popups/Popups";
import AppHeader from "../AppHeader/AppHeader";
import AlertButton from "../AlertButton/AlertButton";

function TheMap() {
  const [viewState, setViewState] = React.useState({
    longitude: -122.404,
    latitude: 37.78,
    zoom: 10,
  });

  const [allTrackers, setAllTrackers] = useState([]);
  const [showAllPopup, setShowAllPopup] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [isOkOpen, setIsOkOpen] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, long: 0 });

  const mapboxToken = import.meta.env.VITE_PUBLIC_KEY;

  useEffect(() => {
    const fetchTrackers = async () => {
      const res = await fetch(`${import.meta.env.VITE_HOST}/tracker`);
      const trackers = await res.json();
      setAllTrackers(trackers);
    };
    fetchTrackers();
  }, [allTrackers]);

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
          setCurrentPosition({ long: lng, lat });
          setFormIsOpen(!formIsOpen);
        }}
        cursor="default"
      >
        <AppHeader
          showAllPopup={showAllPopup}
          setShowAllPopup={setShowAllPopup}
        />
        <Marker
          longitude={currentPosition.long}
          latitude={currentPosition.lat}
          anchor="bottom"
          style={{ cursor: "default" }}
        >
          <TiLocation color="red" size={24} />
        </Marker>
        {allTrackers
          ? allTrackers.map((tracker) => (
              <Popups
                key={tracker._id}
                tracker={tracker}
                showAllPopup={showAllPopup}
              />
            ))
          : null}
        {formIsOpen ? (
          <Popup
            latitude={currentPosition.lat}
            longitude={currentPosition.long}
            anchor="right"
            onClose={() => setFormIsOpen(false)}
            onOpen={() => setFormIsOpen(true)}
          >
            <TrackerForm
              setFormIsOpen={setFormIsOpen}
              formIsOpen={formIsOpen}
              currentPosition={currentPosition}
              setCurrentPosition={setCurrentPosition}
              setOpen={setIsOkOpen}
            />
          </Popup>
        ) : null}
        <ScaleControl />
        <NavigationControl position="bottom-right" />
        <FullscreenControl position="bottom-right" />
        <GeolocateControl position="bottom-right" />
        <AlertButton open={isOkOpen} setOpen={setIsOkOpen} />
      </Map>
    </>
  );
}

export default TheMap;
