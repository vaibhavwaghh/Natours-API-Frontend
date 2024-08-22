import Header from "./Header";
import Footer from "./Footer";
import OverviewList from "./OverviewList";

import Spinner from "./Spinner";
import { useGetAllTours } from "./api/customhooks/getTours/useGetAllTours";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getBookings } from "./api/customhooks/bookTour/useSetBookings";

function BaseTemplate() {
  const { isLoading, allTours } = useGetAllTours();
  const location = useLocation();

  useEffect(() => {
    // Extract the query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const tour = queryParams.get("tour");
    const user = queryParams.get("user");
    const price = queryParams.get("price");
    if (tour != null && user != null && price != null) {
      const queryObj = { tour, user, price };
      console.log("HA QUERY OBJ PATHAVTOY", queryObj);

      getBookings(queryObj);
    }
  }, [location.search]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header />

          <main>
            <OverviewList allTours={allTours} />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default BaseTemplate;
