import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../../context/MyContext";
import { toast } from "react-hot-toast"; // Ensure you have react-toastify installed and set up

const APIURL = import.meta.env.VITE_API_URL;

export function useLoggedIn() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    async function isLoggedIn() {
      try {
        // Make sure to handle the URL correctly within the template literal
        const res = await axios.get(`${APIURL}/isLoggedIn`, {
          withCredentials: true,
        });

        if (res?.data?.status === "success") {
          if (res?.data?.user) setUser(res?.data?.user);
        } else {
          // Handle cases where the response status is not "success"
          console.warn("Unexpected status:", res?.data?.status);
        }
      } catch (err) {
        // Improved error handling with more descriptive messages
        console.error("Error during login check:", err);
        if (err?.response?.data?.message) {
          toast.error(err?.response?.data?.message);
        } else {
          toast.error("An unknown error occurred. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    isLoggedIn(); // Call the async function inside useEffect
  }, []); // Dependency array includes setUser to avoid unnecessary re-renders
  return { isLoading, user };
  // No return needed if this hook is only for side effects
}
