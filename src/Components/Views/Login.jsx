import React from "react";

export default function Login() {
  return (
    <div className="login-class">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="login-form">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
      </form>
    </div>
  );
}
