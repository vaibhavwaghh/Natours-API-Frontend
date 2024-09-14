import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { MyContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

let APIURL = import.meta.env.VITE_API_URL;

export function useLogin() {
  const { setCurrUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false); // Default loading state to false
  const navigate = useNavigate(); // Use navigate from react-router-dom

  async function login(email, password) {
    setLoading(true); // Set loading to true when starting the request
    try {
      const res = await axios.post(
        `${APIURL}/api/v1/users/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log("HA AHE LOGIN CHA RES ", res);

      if (res?.data?.status === "success") {
        toast.success("Logged In Successfully");
        setTimeout(() => {
          navigate("/");
          setCurrUser(res?.data?.data?.user);
        }, 3000);
      } else if (res?.data?.status === "failed") {
        toast.error("Incorrect username or password");
      }
    } catch (err) {
      console.log("HA ERR OBJ", err);
      console.error(
        err?.response?.data?.message || "An unexpected error occurred."
      );
      toast.error(
        err?.response?.data?.message || "An unexpected error occurred."
      );
    } finally {
      setLoading(false); // Set loading to false when request is done
    }
  }

  return { login, loading }; // Return loading state
}
