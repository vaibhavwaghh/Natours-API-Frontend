import { useContext } from "react";

import TourOverview from "./TourOverview";
import Spinner from "./Spinner";

import { MyContext } from "./context/MyContext";
import { useGetOneTour } from "./api/customhooks/getTours/useGetOneTour";

function GetOneTour() {
  const { tourId } = useContext(MyContext);
  console.log("HA MAJHA TOUR ID", tourId);
  let user = {};
  const { isLoading, oneTour: tour } = useGetOneTour(tourId);
  console.log("THIS IS 1 TOUR", tourId, tour, isLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TourOverview tour={tour} user={user} />
        </>
      )}
    </>
  );
}

export default GetOneTour;
