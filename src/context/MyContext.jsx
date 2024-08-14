// MyContext.js
import { createContext } from "react";
import React, { useState } from "react";

const MyContext = createContext(null);

function MyProvider({ children }) {
  const [tourId, setTourId] = useState("");
  const [user, setUser] = useState(null);
  return (
    <MyContext.Provider value={{ tourId, setTourId, user, setUser }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyProvider };

// MyProvider.js
