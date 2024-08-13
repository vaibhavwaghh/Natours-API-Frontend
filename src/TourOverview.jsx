import { useContext } from "react";
import ReviewCard from "./ReviewCard"; // Assuming you have a ReviewCard component
import OverviewBox from "./OverviewBox";
import MyContext from "./context/MyContext";
import { useGetOneTour } from "./api/useGetOneTour";
import Spinner from "./Spinner";
import Header from "./Header";

const TourOverview = ({ tour, user }) => {
  console.log("HA MAJHA TOUR ANI USER", tour, user);

  const date = new Date(tour?.startDates[0]).toLocaleString("en-us", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Header />
      <main className="main">
        {/* Section Header */}
        <section className="section-header">
          <div className="header__hero">
            <div className="header__hero-overlay">&nbsp;</div>
            <img
              className="header__hero-img"
              src={`/img/tours/${tour?.imageCover}`}
              alt={`${tour?.name}`}
            />
          </div>
          <div className="heading-box">
            <h1 className="heading-primary">
              <span>{tour?.name} Tour</span>
            </h1>
            <div className="heading-box__group">
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-clock" />
                </svg>
                <span className="heading-box__text">{`${tour?.duration} days`}</span>
              </div>
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-map-pin" />
                </svg>
                <span className="heading-box__text">
                  {tour?.startLocation?.description}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Description */}
        <section className="section-description">
          <div className="overview-box">
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              <OverviewBox label="Next date" text={date} icon="calendar" />
              <OverviewBox
                label="Difficulty"
                text={tour?.difficulty}
                icon="trending-up"
              />
              <OverviewBox
                label="Participants"
                text={`${tour?.maxGroupSize} people`}
                icon="user"
              />
              <OverviewBox
                label="Rating"
                text={`${tour?.ratingsAverage}/5`}
                icon="star"
              />
            </div>

            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
              {tour?.guides?.map((guide) => (
                <div key={guide.name} className="overview-box__detail">
                  <img
                    className="overview-box__img"
                    src={`/img/users/${guide.photo}`}
                    alt={guide.name}
                  />
                  <span className="overview-box__label">
                    {guide.role === "guide" ? "Tour guide" : "Lead guide"}
                  </span>
                  <span className="overview-box__text">{guide.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">{`About ${tour?.name} tour`}</h2>
            {tour?.description?.split("\n").map((p, index) => (
              <p key={index} className="description__text">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Section Pictures */}
        <section className="section-pictures">
          {tour?.images.map((img, i) => (
            <div key={i} className="picture-box">
              <img
                className={`picture-box__img picture-box__img--${i + 1}`}
                src={`/img/tours/${img}`}
                alt={`The Park Camper Tour ${i + 1}`}
              />
            </div>
          ))}
        </section>

        {/* Section Map */}
        <section className="section-map">
          <div id="map" data-locations={JSON.stringify(tour?.locations)}></div>
        </section>

        {/* Section Reviews */}
        <section className="section-reviews">
          <div className="reviews">
            {tour?.reviews?.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </section>

        {/* Section CTA */}
        <section className="section-cta">
          <div className="cta">
            <div className="cta__img cta__img--logo">
              <img src="/img/logo-white.png" alt="Natours logo" />
            </div>
            <img
              className="cta__img cta__img--1"
              src={`/img/tours/${tour?.images[1]}`}
              alt="Tour Picture"
            />
            <img
              className="cta__img cta__img--2"
              src={`/img/tours/${tour?.images[1]}`}
              alt=""
            />
            <div className="cta__content">
              <h2 className="heading-secondary">What are you waiting for?</h2>
              <p className="cta__text">
                {`${tour?.duration} days. 1 adventure. Infinite memories. Make it yours today!`}
              </p>
              {user ? (
                <button
                  className="btn btn--green"
                  id="book-tour"
                  data-tour-id={tour?.id}
                >
                  Book tour now!
                </button>
              ) : (
                <a className="btn btn--green span-all-rows" href="/login">
                  Login to Book tour
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TourOverview;
