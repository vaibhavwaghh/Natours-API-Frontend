import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

let APIURL = import.meta.env.VITE_API_URL;

export function useUpdatePassword() {
  const navigate = useNavigate();
  const updatePassword = async (formData) => {
    try {
      const res = await axios.patch(
        `${APIURL}/api/v1/users/updateMyPassword`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (res.data.status === "success") {
        console.log("RES OBJ", res.data);
        toast.success("Updated User Successfully");
        window.location.reload();
        // navigate("/");
      } else {
        toast.error("Update User failed");
      }
    } catch (err) {
      console.log("Error:", err);
      toast.error(err.response?.data?.message || "Update User failed");
    }
  };

  return updatePassword;
}
