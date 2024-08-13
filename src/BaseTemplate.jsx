import Header from "./Header";
import Footer from "./Footer";
import OverviewList from "./OverviewList";

function BaseTemplate({ title, children }) {
  // let user = {
  //   _id: "5c8a1d5b0190b214360dc057",
  //   name: "Jonas Schmedtmann",
  //   email: "admin@natours.io",
  //   photo: "user-1.jpg",
  //   role: "admin",
  //   __v: 0,
  // };
  let user = {};
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main>
        {" "}
        <OverviewList />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default BaseTemplate;
