import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MyContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

let APIURL = import.meta.env.VITE_API_URL;

export function useSignUp() {
  const { setCurrUser } = useContext(MyContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state

  async function signup(name, email, password, passwordConfirm) {
    const signupCredentials = { name, email, password, passwordConfirm };
    console.log({ name, email, password, passwordConfirm });

    try {
      setLoading(true);
      const res = await axios.post(
        `${APIURL}/api/v1/users/signup`,
        signupCredentials,
        { withCredentials: true }
      );

      console.log("THIS IS RES", res);
      if (res?.data?.status === "success") {
        toast.success("Signed up Successfully!");
        setTimeout(() => {
          navigate("/");
          setCurrUser(res?.data?.data?.user);
        }, 3000);
      } else {
        toast.error("Signup failed");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false); // Set loading to false when request is done
    }
  }
  return { signup, loading }; // Return loading state
}
