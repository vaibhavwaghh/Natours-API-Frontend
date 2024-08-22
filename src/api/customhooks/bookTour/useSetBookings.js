import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// const stripe = Stripe(
//   'pk_test_51OOcmGSJ04lWz7sm6gOr6WqAlGt1dWC8bG92xC98mLzbOxsVQEaguw9mXmyWW0QYDW4P4jKmnxJ72bZQPsdCzpPO00i6fFi33q',
// );

let APIURL = import.meta.env.VITE_API_URL;

export async function getBookings(queryObj) {
  try {
    const res = await axios.post(`${APIURL}/getBookings`, queryObj, {
      withCredentials: true,
    });
    console.log("HA ALAY RAJA RESPONSE", res?.data?.url);

    const redirectUrl = `${res?.data?.url}my-bookings`;
    window.location.href = redirectUrl;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}
