import axios from "axios";
import toast from "react-hot-toast";

let APIURL = import.meta.env.VITE_API_URL;
export function useLogin() {
  async function login(email, password) {
    try {
      const res = await axios.post(`${APIURL}/api/v1/users/login`, {
        email,
        password,
      });
      console.log("THIS IS RESPONSE", res);
      if (res?.data?.status === "success") {
        toast.success("Logged In Successfully");
        window.location.href = "/";
      } else if (res?.data?.status === "failed") {
        console.log("HA ERROR AHE");
        toast.error("Incorrect username or password");
        window.location.href = "/login";
      }
      // Handle successful login (e.g., store token, redirect user, etc.)
    } catch (err) {
      console.log("HA ERR OBJ", err);
      console.log(err?.response?.data?.message);

      toast.error(err?.response?.data?.message);

      // Handle errors (e.g., display error message to the user)
    }
  }

  return login;
}
