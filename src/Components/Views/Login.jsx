import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-class">
      <form className="login-form">
        <h3>Log in</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <p>
          Don't have an account? <Link to={"/signup"}>Sign up</Link>
        </p>
      </form>
    </div>
  );
}
