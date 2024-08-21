import { useGetBookings } from "./api/customhooks/bookTour/useGetBookings";
import Header from "./Header";
import OverviewList from "./OverviewList";
import Spinner from "./Spinner";
import SettingNavBar from "./SettingNavBar"; // Assuming this is a component you have
import { useGetMe } from "./api/customhooks/getMe/useGetMe";

function GetBooking() {
  const { tours, isLoading } = useGetBookings();
  const { isLoading: isLoading2, user } = useGetMe();
  console.log("HE AHE TOURS", tours);

  return (
    <>
      {isLoading || isLoading2 ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <main className="main">
            <div className="user-view">
              <SettingNavBar user={user} />{" "}
              {/* Assuming you have a user object available */}
              <OverviewList allTours={tours} />
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default GetBooking;
