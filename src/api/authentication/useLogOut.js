import { useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";

const APIURL = import.meta.env.VITE_API_URL;

export function useLogOut() {
  const { setCurrUser } = useContext(MyContext);
  const navigate = useNavigate();

  async function logout() {
    try {
      const res = await axios.get(`${APIURL}/api/v1/users/logout`, {
        withCredentials: true,
      });

      if (res?.data?.status === "success") {
        toast.success("Logged Out Successfully!");
        setTimeout(() => {
          setCurrUser(null);

          if (window.location.pathname === "/") {
            window.location.reload(); // Reload if the current URL is "/"
          } else {
            navigate("/"); // Navigate to "/" if the current URL is not "/"
          }
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      toast.error("An unknown error occurred during logout");
    }
  }

  return logout;
}
