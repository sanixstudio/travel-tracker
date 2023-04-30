import React, { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  //   Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";
// import { TiLocation } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import "./style.css";

function TheMap() {
  const [viewState, setViewState] = React.useState({
    longitude: -122.404,
    latitude: 37.78,
    zoom: 10,
    width: 500,
    height: 300,
  });

  const [showPopup, setShowPopup] = useState(true);
  const [longitude, setLongitude] = useState(-122.404);
  const [latitude, setLatitude] = useState(37.78);

  const mapboxToken = import.meta.env.VITE_PUBLIC_KEY;

  return (
    <>
      <button className="tab-btn" onClick={() => setShowPopup(true)}>
        Show Trackers
      </button>
      <Map
        reuseMaps
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={mapboxToken}
        style={{ width: "90vw", maxWidth: "1200px", height: "500px" }}
        onClick={(e) => {
          console.log({ Lat: e.lngLat.lat, Long: e.lngLat.lng });
        }}
        cursor="default"
      >
        {/* <Marker longitude={-122.404} latitude={37.78} anchor="bottom">
        <TiLocation color="red" size={24} />
      </Marker> */}
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
              <div className="header">
                <label>Place</label>
                <h4 className="title">Sales Force Tower</h4>
              </div>
              <div className="reviews">
                <label>Review</label>
                <p>A nice place to shit on the street and enjoy the food</p>
              </div>
              <div className="ratings">
                <label>Rating</label>
                <div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="information">
                <span className="user">
                  Created by <b>Sanam</b>
                </span>
                <span className="time">1 hour ago</span>
              </div>
            </div>
          </Popup>
        ) : null}
        <ScaleControl />
        <NavigationControl />
        <FullscreenControl />
        <GeolocateControl onGeolocate={(e) => console.log(e.coords)} />
      </Map>
    </>
  );
}

export default TheMap;