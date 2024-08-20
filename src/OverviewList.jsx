import { useGetAllTours } from "./api/customhooks/getTours/useGetAllTours";
import Overview from "./Overview";
import Spinner from "./Spinner";

const OverviewList = ({ allTours }) => {
  return (
    <>
      <main className="main">
        <div className="card-container">
          {allTours?.map((tour) => (
            <Overview key={tour._id} tour={tour} />
          ))}
        </div>
      </main>
    </>
  );
};

export default OverviewList;
