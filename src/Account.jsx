import React, { useContext, useState } from "react";
import NavItem from "./NavItem";
import { MyContext } from "./context/MyContext";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useAccount } from "./api/customhooks/useAccount";

const Account = () => {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();
  if (!user) navigate("/");
  console.log("THIS IS USER PHOTO", user?.photo);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [photo, setPhoto] = useState(user?.photo);
  const account = useAccount();

  function handleFileChange(event) {
    const file = event.target.files[0]; // Get the first file selected
    setPhoto(file);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    if (photo) {
      formData.append("photo", photo);
    }

    console.log("THIS IS FORM DATA ", formData);

    account(formData);
  }
  return (
    <>
      <Header />
      <main className="main">
        <div className="user-view">
          <nav className="user-view__menu">
            <ul className="side-nav">
              <NavItem link="#" text="Settings" icon="settings" active={true} />
              <NavItem link="/my-tours" text="My Bookings" icon="briefcase" />
              <NavItem link="#" text="My reviews" icon="star" />
              <NavItem link="#" text="Billing" icon="credit-card" />
            </ul>

            {user?.role === "admin" && (
              <div className="admin-nav">
                <h5 className="admin-nav__heading">Admin</h5>
                <ul className="side-nav">
                  <NavItem link="#" text="Manage tours" icon="map" />
                  <NavItem link="#" text="Manage users" icon="users" />
                  <NavItem link="#" text="Manage reviews" icon="star" />
                  <NavItem link="#" text="Manage bookings" icon="briefcase" />
                </ul>
              </div>
            )}
          </nav>

          <div className="user-view__content">
            <div className="user-view__form-container">
              <h2 className="heading-secondary ma-bt-md">
                Your account settings
              </h2>
              <form onSubmit={handleSubmit} className="form form-user-data">
                <div className="form__group">
                  <label className="form__label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="form__input"
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form__group ma-bt-md">
                  <label className="form__label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    className="form__input"
                    type="email"
                    value={email}
                    required
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group form__photo-upload">
                  <img
                    className="form__user-photo"
                    src={`img/users/${photo}`}
                    alt="User photo"
                  />
                  <input
                    className="form__upload"
                    type="file"
                    accept="image/*"
                    id="photo"
                    name="photo"
                    onChange={handleFileChange}
                  />
                  <label className="btn-text" htmlFor="photo">
                    Choose new photo
                  </label>
                </div>
                <div className="form__group right">
                  <button className="btn btn--small btn--green" type="submit">
                    Save settings
                  </button>
                </div>
              </form>
            </div>
            <hr className="line" />
            <div className="user-view__form-container">
              <h2 className="heading-secondary ma-bt-md">Password change</h2>
              <form className="form form-user-password">
                <div className="form__group">
                  <label className="form__label" htmlFor="password-current">
                    Current password
                  </label>
                  <input
                    id="password-current"
                    className="form__input"
                    type="password"
                    placeholder="••••••••"
                    required
                    minLength="8"
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="password">
                    New password
                  </label>
                  <input
                    id="password"
                    className="form__input"
                    type="password"
                    placeholder="••••••••"
                    required
                    minLength="8"
                  />
                </div>
                <div className="form__group ma-bt-lg">
                  <label className="form__label" htmlFor="password-confirm">
                    Confirm password
                  </label>
                  <input
                    id="password-confirm"
                    className="form__input"
                    type="password"
                    placeholder="••••••••"
                    required
                    minLength="8"
                  />
                </div>
                <div className="form__group right">
                  <button className="btn btn--small btn--green btn--save-password">
                    Save password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
