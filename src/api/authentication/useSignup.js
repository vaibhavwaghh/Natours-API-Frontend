import axios from "axios";
import toast from "react-hot-toast";

import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
let APIURL = import.meta.env.VITE_API_URL;

export function useSignUp() {
  const { setUser } = useContext(MyContext);

  async function signup(name, email, password, passwordConfirm) {
    const signupCredentials = { name, email, password, passwordConfirm };
    console.log({ name, email, password, passwordConfirm });
    try {
      const res = await axios.post(
        `${APIURL}/api/v1/users/signup`,
        signupCredentials,
        { withCredentials: true }
      );

      console.log("THIS IS RES", res);
      if (res?.data?.status === "success") {
        toast.success("Signed up Successful!");
        setUser(res?.data?.data?.user);
        setTimeout(() => {
          location.assign("/");
        }, 500);
      } else {
        toast.error("Signup failed");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  }
  return signup;
}
