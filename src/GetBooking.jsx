import { useGetBookings } from "./api/customhooks/bookTour/useGetBookings";
import Header from "./Header";
import OverviewList from "./OverviewList";
import Spinner from "./Spinner";
import SettingNavBar from "./SettingNavBar";
import { useGetMe } from "./api/customhooks/getMe/useGetMe";
import BookingOverviewList from "./BookingOverviewList";
import NoBooking from "./NoBooking";

function GetBooking() {
  const { tours, isLoading, message } = useGetBookings();
  const { isLoading: isLoading2, user } = useGetMe();
  console.log("HE AHE TOURS", tours);

  if (isLoading || isLoading2) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="user-view">
          <SettingNavBar user={user} />
          {message ? <NoBooking /> : <BookingOverviewList allTours={tours} />}
        </div>
      </main>
    </>
  );
}

export default GetBooking;
