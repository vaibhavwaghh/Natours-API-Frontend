import Header from "./Header";
import Footer from "./Footer";
import OverviewList from "./OverviewList";
import { useContext, useEffect } from "react";
import { MyContext } from "./context/MyContext";
import { useLoggedIn } from "./api/authentication/isLoggedIn";
import Spinner from "./Spinner";

function BaseTemplate({ title, children }) {
  // let user = {
  //   _id: "5c8a1d5b0190b214360dc057",
  //   name: "Jonas Schmedtmann",
  //   email: "admin@natours.io",
  //   photo: "user-1.jpg",
  //   role: "admin",
  //   __v: 0,
  // };
  const { setUser } = useContext(MyContext);
  const { isLoading, user } = useLoggedIn();

  // Set the user context when user data is loaded
  useEffect(() => {
    if (!isLoading && user) {
      setUser(user);
    }
  }, [isLoading, user, setUser]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {/* HEADER */}
          <Header />

          {/* MAIN */}
          <main>
            <OverviewList />
          </main>

          {/* FOOTER */}
          <Footer />
        </>
      )}
    </>
  );
}

export default BaseTemplate;
