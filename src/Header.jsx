import { useContext } from "react";

import "./App.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./context/MyContext";
import { useLogOut } from "./api/authentication/useLogOut";
let APIURL = import.meta.env.VITE_API_URL;
function Header() {
  const navigate = useNavigate();
  const logout = useLogOut();

  const { user } = useContext(MyContext);
  function handleClick() {
    logout();
  }

  return (
    // <>
    //   {isLoading ? (
    //     <Spinner />
    //   ) : (
    <>
      <header className="header">
        <nav className="nav nav--tours">
          <a className="nav__el" href="/">
            All tours
          </a>
        </nav>
        <div className="header__logo">
          <img src="/img/logo-white.png" alt="Natours logo" />
        </div>
        <nav className="nav nav--user">
          {user ? (
            <>
              <button className="nav__el nav__el--logout" onClick={handleClick}>
                Log out
              </button>
              <button className="nav__el" onClick={() => navigate("/account")}>
                <img
                  className="nav__user-img"
                  // src={`${APIURL}/img/users/${user?.photo}`}
                  alt={`PHOTO OF ${user.name}`}
                />
                <span>{user?.name?.split(" ")[0]}</span>
              </button>
            </>
          ) : (
            <>
              <button className="nav__el" onClick={() => navigate("/login")}>
                Log in
              </button>
              <a
                className="nav__el nav__el--cta"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </a>
            </>
          )}
        </nav>
      </header>
    </>
    //   )}
    // </>
  );
}

export default Header;
