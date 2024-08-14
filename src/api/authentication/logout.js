import axios from "axios";
import toast from "react-hot-toast";

let APIURL = import.meta.env.VITE_API_URL;

export const logout = async () => {
  try {
    const res = await axios.get(`${APIURL}/api/v1/users/logout`);

    if (res?.data?.status === "success") {
      toast.success("Logged Out Successfully!");
      window.location.href = "/";
    }
  } catch (err) {
    console.log("HA ERROR OBJ", err);

    toast.error("NAHI CHAL RHA CODE", err?.message);

    // Handle errors (e.g., display error message to the user)
  }
};
