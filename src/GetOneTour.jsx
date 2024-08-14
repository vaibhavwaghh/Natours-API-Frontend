import { useContext } from "react";

import TourOverview from "./TourOverview";
import Spinner from "./Spinner";

import { useGetOneTour } from "./api/customhooks/useGetOneTour";
import { MyContext } from "./context/MyContext";

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
