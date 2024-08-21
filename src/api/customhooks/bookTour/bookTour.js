import axios from "axios";
import toast from "react-hot-toast";

// const stripe = Stripe(
//   'pk_test_51OOcmGSJ04lWz7sm6gOr6WqAlGt1dWC8bG92xC98mLzbOxsVQEaguw9mXmyWW0QYDW4P4jKmnxJ72bZQPsdCzpPO00i6fFi33q',
// );

let APIURL = import.meta.env.VITE_API_URL;

export const bookTour = async (tourId, userId) => {
  /**1) GET CHECKOUT SESSION FROM API */
  try {
    // console.log(stripe, Stripe());
    console.log("ha ahe userid and tourid", tourId, userId);
    const res = await axios(
      `${APIURL}/api/v1/bookings/checkout-session/${tourId}`,
      {
        withCredentials: true,
      }
    );

    console.log(res);

    /**2) CREATE CHECKOUT FORM + CHARGE CREDIT CARD FOR IT */
    if (res?.data?.status == "success") {
      window.location.href = res?.data?.session?.url;
    } else {
      toast.error("Something went wrong!!");
    }
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong!!", err);
  }
};
