import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { MyContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

let APIURL = import.meta.env.VITE_API_URL;

export function useLogIn() {
  const { setCurrUser } = useContext(MyContext);
  const navigate = useNavigate();
  async function login(email, password) {
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
        console.log("HA ERROR AHE");
        toast.error("Incorrect username or password");
      }
    } catch (err) {
      console.log("HA ERR OBJ", err);
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    }
  }
  return login;
}
