import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context/MyContext";
let APIURL = import.meta.env.VITE_API_URL;
export function useGetAllTours() {
  const [allTours, setAllTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(MyContext);
  useEffect(function () {
    async function getAllTours() {
      const res = await axios.get(`${APIURL}`, { withCredentials: true });
      console.log("HA AHE RES", res);

      const allTourArray = res?.data?.tours;
      setAllTours(allTourArray);
      if (res?.data?.users) setUser(res?.data?.users);
      setIsLoading(false);
    }

    getAllTours();
  }, []);

  return { isLoading, allTours };
}
