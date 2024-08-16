import { useContext, useState } from "react";
import Header from "./Header";
import { useSignUp } from "./api/authentication/useSignup";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const signup = useSignUp();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("THIS IS MY EMAIL PASS", email, password);
    signup(name, email, password, passwordConfirm);
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  }
  return (
    <>
      <Header />
      <main className="main">
        <div className="signup-form">
          <form className="form form--signup" onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="form__input"
                type="text"
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
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
