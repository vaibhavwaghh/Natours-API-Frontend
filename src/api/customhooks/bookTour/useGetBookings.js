import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// const stripe = Stripe(
//   'pk_test_51OOcmGSJ04lWz7sm6gOr6WqAlGt1dWC8bG92xC98mLzbOxsVQEaguw9mXmyWW0QYDW4P4jKmnxJ72bZQPsdCzpPO00i6fFi33q',
// );

let APIURL = import.meta.env.VITE_API_URL;

export function useGetBookings() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(function () {
    async function getBookings() {
      try {
        const res = await axios(`${APIURL}/my-tours`, {
          withCredentials: true,
        });

        console.log(res);

        if (res?.data?.status == "success") {
          console.log(res.data.tours);

          setTours(res?.data?.tours);
        } else {
          toast.error("Something went wrong!!");
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong!!", err);
      } finally {
        setIsLoading(false);
      }
    }
    getBookings();
  }, []);
  return { tours, isLoading };
}
