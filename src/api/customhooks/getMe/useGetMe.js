import axios from "axios";
import { useEffect, useState } from "react";

let APIURL = import.meta.env.VITE_API_URL;
export function useGetMe() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("");
  useEffect(function () {
    async function getMe() {
      const res = await axios.get(`${APIURL}/me`, { withCredentials: true });
      console.log("HA AHE GETME", res?.data?.users);
      if (res?.data?.status === "success") {
        setUser(res?.data?.users);
      }
      setIsLoading(false);
    }

    getMe();
  }, []);

  return { isLoading, user };
}
