import { useGetAllTours } from "./api/customhooks/useGetAllTours";
import Overview from "./Overview";
import Spinner from "./Spinner";

const OverviewList = () => {
  const { isLoading, allTours } = useGetAllTours();
  console.log("THIS IS ALL TOURS", allTours);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className="main">
          <div className="card-container">
            {allTours?.map((tour) => (
              <Overview key={tour._id} tour={tour} />
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default OverviewList;
