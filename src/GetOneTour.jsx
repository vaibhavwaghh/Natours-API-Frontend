import { useContext } from "react";

import TourOverview from "./TourOverview";
import Spinner from "./Spinner";

import { MyContext } from "./context/MyContext";
import { useGetOneTour } from "./api/customhooks/getTours/useGetOneTour";

function GetOneTour() {
  const { tourId } = useContext(MyContext);
  const { user } = useContext(MyContext);

  const { isLoading, oneTour: tour } = useGetOneTour(tourId);
  console.log("HA MAJHA GET ONE TOUR CHA TOUR ANI USER", tour, user);
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
