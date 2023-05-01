import React from "react";
import "./style.css";
import User from "../User/User";

const Header = ({ showAllPopup, setShowAllPopup }) => {
  return (
    <div className="header">
      <div>
        <button className="tab-btn" onClick={() => setShowAllPopup(true)}>
          Show Trackers
        </button>
        <button className="tab-btn" onClick={() => setShowAllPopup(false)}>
          Hide Trackers
        </button>
      </div>
      <div>
        {/* <span>User</span> */}
        <User />
      </div>
    </div>
  );
};

export default Header;
