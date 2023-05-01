import React, { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";
import { TiLocation } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import "./style.css";
import Header from "../Header/Header";
import TrackerForm from "../TrackerForm/TrackerForm";

function TheMap() {
  const [viewState, setViewState] = React.useState({
    longitude: -122.404,
    latitude: 37.78,
    zoom: 10,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [formPostion, setFormPostion] = useState({ lat: 0, long: 0 });
  const [longitude, setLongitude] = useState(-122.404);
  const [latitude, setLatitude] = useState(37.78);

  const mapboxToken = import.meta.env.VITE_PUBLIC_KEY;

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
        <Header showPopup={showPopup} setShowPopup={setShowPopup} />
        <Marker
          longitude={formPostion.long}
          latitude={formPostion.lat}
          anchor="top-left"
        >
          <TiLocation color="red" size={24} />
        </Marker>
        {showPopup ? (
          <Popup
            longitude={longitude}
            latitude={latitude}
            anchor="right"
            closeButton
            onClose={() => setShowPopup(false)}
            className="pop-pup"
          >
            <div className="tracker-card">
              <div className="tracker-header">
                <label>Place</label>
                <h3 className="title">Sales Force Tower</h3>
              </div>
              <div className="reviews">
                <label>Review</label>
                <p>A nice place to shit on the street and enjoy the food</p>
              </div>
              <div className="ratings">
                <label>Rating</label>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="information">
                <span className="user">
                  Created by &nbsp;<b>Sanam</b>
                </span>
                <span className="time">1 hour ago</span>
              </div>
            </div>
          </Popup>
        ) : null}
        {formIsOpen ? (
          <Popup
            latitude={formPostion.lat}
            longitude={formPostion.long}
            anchor="right"
            closeButton
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
