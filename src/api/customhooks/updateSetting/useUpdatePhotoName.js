import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { MyContext } from "../../../context/MyContext";
import { useNavigate } from "react-router-dom";

let APIURL = import.meta.env.VITE_API_URL;

export function useUpdatePhotoName() {
  const { setCurrUser } = useContext(MyContext);
  const navigate = useNavigate();
  const updatePhotoName = async (formData) => {
    try {
      const res = await axios.patch(
        `${APIURL}/api/v1/users/updateMe`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.status === "success") {
        console.log("RES OBJ", res.data);

        toast.success("Updated User Successfully");
        setCurrUser(res?.data?.data?.user);
        window.location.reload();
        // navigate("/"); // Reload the page after successful update
      } else {
        toast.error("Update User failed");
      }
    } catch (err) {
      console.log("Error:", err);
      toast.error(err.response?.data?.message || "Update User failed");
    }
  };

  return updatePhotoName;
}
