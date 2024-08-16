import axios from "axios";
import { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { MyContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

let APIURL = import.meta.env.VITE_API_URL;

export function useAccount() {
  const { setUser } = useContext(MyContext);
  // const navigate = useNavigate();
  async function account(formData) {
    console.log("ANDAR VALA CHANGES", formData);

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

      if (res?.data?.status === "success") {
        toast.success("Updated User Successfully");

        setUser(res?.data?.data?.user);
      } else if (res?.data?.status === "failed") {
        console.log("HA ERROR AHE");
        toast.error("Update User failed");
      }
    } catch (err) {
      console.log("HA ERR OBJ", err);
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    }
  }
  return account;
}

// `${APIURL}/api/v1/users/updateMe`,
