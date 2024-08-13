import { useState } from "react";
import MyContext from "./MyContext";

function MyProvider({ children }) {
  const [tourId, setTourId] = useState("");

  return (
    <MyContext.Provider value={{ tourId, setTourId }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
