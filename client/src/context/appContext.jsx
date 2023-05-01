import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState('Adi');
  const [showAllPins, setShowAllPins] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, showAllPins, setShowAllPins }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
