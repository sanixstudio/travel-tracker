import React from "react";
import "./style.css";

const Header = ({ setShowPopup }) => {
  return (
    <div className="header">
      <div>
        <button className="tab-btn" onClick={() => setShowPopup(true)}>
          Show Trackers
        </button>
        <button className="tab-btn" onClick={() => setShowPopup(false)}>
          Hide Trackers
        </button>
      </div>
      <div>
        <span>User</span>
      </div>
    </div>
  );
};

export default Header;
