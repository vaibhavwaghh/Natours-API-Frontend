import Header from "./Header";

const SignupForm = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="signup-form">
          <form className="form form--signup">
            <div className="form__group">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="form__input"
                type="text"
                placeholder="your name"
                required
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
                placeholder="you@example.com"
                required
                minLength="8"
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="passwordconfirm">
                Password Confirm
              </label>
              <input
                id="passwordconfirm"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength="8"
              />
            </div>
            <div className="form__group">
              <button className="btn btn--green btn--signup" type="submit">
                SignUp
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignupForm;
