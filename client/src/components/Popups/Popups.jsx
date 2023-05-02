import { Popup } from "react-map-gl";
import { FaStar } from "react-icons/fa";
import { format } from "timeago.js";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const Popups = ({ tracker, showAllPopup }) => {
  if (showAllPopup) {
    return (
      <Popup
        longitude={tracker.long}
        latitude={tracker.lat}
        anchor="right"
        closeButton
        closeOnClick={false}
        className="pop-pup"
      >
        <div className="tracker-card">
          <div className="tracker-header">
            <label>Place</label>
            <h3 className="title">{tracker.title}</h3>
          </div>
          <div className="reviews">
            <label>Review</label>
            <p>{tracker.desc}</p>
          </div>
          <div className="ratings">
            <label>Ratings</label>
            <div className="stars">
              {new Array(tracker.rating).fill(null).map(() => (
                <FaStar key={uuidv4()} />
              ))}
            </div>
          </div>
          <div className="information">
            <span className="user">
              Created by &nbsp;<b>{tracker.username}</b>
            </span>
            <span className="time">{format(tracker.createdAt)}</span>
          </div>
        </div>
      </Popup>
    );
  } else return null;
};

export default Popups;
