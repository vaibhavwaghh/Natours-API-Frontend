import Overview from "./Overview";

function BookingOverviewList({ allTours }) {
  return (
    <>
      <main className="main">
        <div className="card-container-2">
          {allTours?.map((tour) => (
            <Overview key={tour._id} tour={tour} />
          ))}
        </div>
      </main>
    </>
  );
}

export default BookingOverviewList;
