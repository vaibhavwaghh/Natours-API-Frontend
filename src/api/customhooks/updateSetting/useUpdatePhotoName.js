import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { MyContext } from "../../../context/MyContext";

let APIURL = import.meta.env.VITE_API_URL;

export function useUpdatePhotoName() {
  const { setUser } = useContext(MyContext);

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
        setUser(res?.data?.data?.user);
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
