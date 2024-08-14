import axios from "axios";
import { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { MyContext } from "../../context/MyContext";

let APIURL = import.meta.env.VITE_API_URL;

export function useLogIn() {
  const setUser = useContext(MyContext);
  async function login(email, password) {
    try {
      const res = await axios.post(`${APIURL}/api/v1/users/login`, {
        email,
        password,
      });

      console.log("HA AHE LOGIN CHA RES ", res);

      if (res?.data?.status === "success") {
        toast.success("Logged In Successfully");
        setUser(res?.data?.data?.user);
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
  // You can call login here if needed or provide login function as part of the return
  // Example: login('email@example.com', 'password123');
}

// Return the states and possibly the login function for later use
