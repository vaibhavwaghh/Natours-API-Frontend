import axios from "axios";
import { useEffect, useState } from "react";
let APIURL = import.meta.env.VITE_API_URL;
export function useGetAllTours() {
  const [allTours, setAllTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(function () {
    async function getAllTours() {
      const res = await axios.get(`${APIURL}/api/v1/tours`);
      console.log("RESPONSE", res);

      const allTourArray = res?.data?.data?.doc;
      setAllTours(allTourArray);
      setIsLoading(false);
    }

    getAllTours();
  }, []);

  return { isLoading, allTours };
}
