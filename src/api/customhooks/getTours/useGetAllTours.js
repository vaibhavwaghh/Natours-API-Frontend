import axios from "axios";
import { useEffect, useState } from "react";

let APIURL = import.meta.env.VITE_API_URL;
export function useGetAllTours() {
  const [allTours, setAllTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function getAllTours() {
      const res = await axios.get(`${APIURL}`, { withCredentials: true });
      console.log("HA AHE RES", res);

      const allTourArray = res?.data?.tours;
      setAllTours(allTourArray);

      setIsLoading(false);
    }

    getAllTours();
  }, []);

  return { isLoading, allTours };
}
