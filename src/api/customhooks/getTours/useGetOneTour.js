import axios from "axios";
import { useEffect, useState } from "react";

let APIURL = import.meta.env.VITE_API_URL;
export function useGetOneTour(id) {
  const [oneTour, setOneTour] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getOneTour() {
      const res = await axios.get(`${APIURL}/api/v1/tours/${id}`, {
        withCredentials: true,
      });
      console.log("DATA FROM 1 TOUR", res);
      const oneTourArray = res?.data?.tour;
      setOneTour(oneTourArray);
      setIsLoading(false);
    }
    getOneTour();
  }, [id]);

  return { isLoading, oneTour };
}
