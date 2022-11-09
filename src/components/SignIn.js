import React from "react";
import "./SignIn.css";

function SignIn() {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>

        <h4>
          <span className="sign__gray"> New to Netflix? </span>
          <span onClick={register} className="sign__link">
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
