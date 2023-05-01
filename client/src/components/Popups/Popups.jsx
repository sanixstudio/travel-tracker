import { Popup } from "react-map-gl";
import { FaStar } from "react-icons/fa";
import "./style.css";

const Popups = ({ tracker, showAllPopup }) => {
  if (showAllPopup) {
    return (
      <Popup
        longitude={tracker.long}
        latitude={tracker.lat}
        anchor="right"
        closeButton
        // onClose={() => setShowPopup(false)}
        className="pop-pup"
      >
        <div className="tracker-card">
          <div className="tracker-header">
            <label>Title</label>
            <h3 className="title">{tracker.title}</h3>
          </div>
          <div className="reviews">
            <label>Review</label>
            <p>{tracker.desc}</p>
          </div>
          <div className="ratings">
            <label>Ratings</label>
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
              Created by &nbsp;<b>{tracker.username}</b>
            </span>
            <span className="time">{tracker.createdAt}</span>
          </div>
        </div>
      </Popup>
    );
  } else return null;
};

export default Popups;
