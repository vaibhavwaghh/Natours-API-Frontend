import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { MyContext } from "../../../context/MyContext";

let APIURL = import.meta.env.VITE_API_URL;

export function useGetMe() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null); // Changed from an empty string to null for better clarity
  const { setCurrUser } = useContext(MyContext);
  useEffect(() => {
    async function getMe() {
      try {
        const res = await axios.get(`${APIURL}/me`, { withCredentials: true });
        console.log("Response from /me:", res?.data?.users);
        if (res?.data?.status === "success") {
          console.log("SUCCESS ALA");
          setUser(res?.data?.users);
          setCurrUser(res?.data?.users);
        } else {
          console.log("FAILURE ALA");
          setUser(null);
          setCurrUser(null);
        }
      } catch (err) {
        setUser(null);
        setCurrUser(null);
        console.log(err);
      } finally {
        setIsLoading(false); // Ensure loading state is updated regardless of success or error
      }
    }
    getMe(); // Call the function here
  }, []);

  return { isLoading, user };
}
