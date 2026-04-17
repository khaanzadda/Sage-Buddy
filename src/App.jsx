import { useState } from "react";

function BrandMark() {
  return (
    <div className="brandmark" aria-hidden="true">
      <span className="brandmark__block brandmark__block--top" />
      <span className="brandmark__block brandmark__block--middle" />
      <span className="brandmark__block brandmark__block--bottom" />
    </div>
  );
}

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="page-shell">
      <section className="signin-layout">
        <header className="brand-header">
          <BrandMark />
          <div>
            <h1>SageBuddy</h1>
            <p>Your Wise Companion</p>
          </div>
        </header>

        <section className="signin-card">
          <div className="signin-card__heading">
            <h2>SIGN IN</h2>
            <p>
              Don&apos;t have an account yet? <a href="#signup">Sign up</a>
            </p>
          </div>

          <form className="signin-form">
            <label className="field-group" htmlFor="email">
              <span>Your Email</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="info@sagebuddy.com"
              />
            </label>

            <label className="field-group" htmlFor="password">
              <span>Password</span>
              <div className="password-field">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="************"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <div className="form-options">
              <label className="checkbox-row" htmlFor="remember">
                <input id="remember" name="remember" type="checkbox" defaultChecked />
                <span>Remember me</span>
              </label>
              <a href="#forgot">Forgot Password?</a>
            </div>

            <button className="signin-button" type="submit">
              SIGNIN
            </button>
          </form>
        </section>

        <footer className="site-footer">Copyright 2021 - SageBuddy.com</footer>
      </section>
    </main>
  );
}

export default App;
