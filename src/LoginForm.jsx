import React, { useState } from "react";
import Header from "./Header";
import { useLogin } from "./api/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("THIS IS MY EMAIL PASS", email, password);
    login(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <Header />
      <main className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <form className="form form--login" onSubmit={(e) => handleSubmit(e)}>
            <div className="form__group">
              <label className="form__label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="form__input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="form__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="8"
                placeholder="••••••••"
              />
            </div>
            <div className="form__group">
              <button className="btn btn--green" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginForm;
