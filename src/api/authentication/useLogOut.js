import { useContext } from "react";
import axios from "axios";

import { toast } from "react-hot-toast"; // Ensure you have react-toastify installed and set up
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";

const APIURL = import.meta.env.VITE_API_URL;

export function useLogOut() {
  const { setUser } = useContext(MyContext);
  const navigate = useNavigate();
  async function logout() {
    try {
      // Make sure to handle the URL correctly within the template literal
      const res = await axios.get(`${APIURL}/api/v1/users/logout`, {
        withCredentials: true,
      });

      if (res?.data?.status === "success") {
        toast.success("Logged Out Successfully!");
        setTimeout(() => {
          setUser(null);
          navigate("/");
        }, 3000);
      }
    } catch (err) {
      // Improved error handling with more descriptive messages

      toast.error("An unknown error occurred in Log out");
    }
  }

  //  / Dependency array includes setUser to avoid unnecessary re-renders
  return logout;
  // No return needed if this hook is only for side effects
}
