import { useContext, useState } from "react";
import NavItem from "./NavItem";
import { MyContext } from "./context/MyContext";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useUpdatePhotoName } from "./api/customhooks/updateSetting/useUpdatePhotoName";
import { useUpdatePassword } from "./api/customhooks/updateSetting/useUpdatePassword";
import SettingNavBar from "./SettingNavBar";
import { useGetMe } from "./api/customhooks/getMe/useGetMe";
import Spinner from "./Spinner";
let APIURL = import.meta.env.VITE_API_URL;
const Account = () => {
  const { isLoading, user } = useGetMe();
  console.log("ala re ala user ala", user);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [photo, setPhoto] = useState(user?.photo);

  const [passwordCurrent, setPasswordCurr] = useState("");
  const [password, setPasswordNew] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const account = useUpdatePhotoName();
  const updatePassword = useUpdatePassword();
  const formData = new FormData();

  function handleFileChange(event) {
    const file = event.target.files[0]; // Get the first file selected
    setPhoto(file);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("NAME , EMAIL, PHOTO", name, email, photo);

    formData.append("name", name);
    formData.append("email", email);
    formData.append("photo", photo);

    // To view the form data entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // Call your account function with the form data
    account(formData);
  }

  function handleSubmit2(e) {
    e.preventDefault();
    const allData = { passwordCurrent, password, passwordConfirm };
    // Call your account function with the form data
    updatePassword(allData);
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <Header />
          <main className="main">
            <div className="user-view">
              <SettingNavBar user={user} />

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
                        value={user?.name}
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
                        value={user?.email}
                        required
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form__group form__photo-upload">
                      <img
                        className="form__user-photo"
                        src={`${APIURL}/img/users/${user?.photo}`}
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
                      <button
                        className="btn btn--small btn--green"
                        type="submit"
                      >
                        Save settings
                      </button>
                    </div>
                  </form>
                </div>
                <hr className="line" />
                <div className="user-view__form-container">
                  <h2 className="heading-secondary ma-bt-md">
                    Password change
                  </h2>
                  <form
                    className="form form-user-password"
                    onSubmit={handleSubmit2}
                  >
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
                        onChange={(e) => setPasswordCurr(e.target.value)}
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
                        onChange={(e) => setPasswordNew(e.target.value)}
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
                        onChange={(e) => setPasswordConfirm(e.target.value)}
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
      )}
    </>
  );
};

export default Account;
