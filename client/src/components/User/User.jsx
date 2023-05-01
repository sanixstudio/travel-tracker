import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

const User = () => {
  const { user, setUser } = useContext(AppContext);

  return (
    <div>
      <label>User: {user}</label>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
};

export default User;
