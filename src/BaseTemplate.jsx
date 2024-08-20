import Header from "./Header";
import Footer from "./Footer";
import OverviewList from "./OverviewList";

import Spinner from "./Spinner";
import { useGetAllTours } from "./api/customhooks/getTours/useGetAllTours";

function BaseTemplate() {
  const { isLoading, allTours } = useGetAllTours();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header />

          <main>
            <OverviewList allTours={allTours} />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default BaseTemplate;
