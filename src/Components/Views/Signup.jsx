import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup-class">
      <form className="signup-form">
        <h3>Sign up</h3>
        <label for="firstname">First Name</label>
        <input type="text" placeholder="first name" id="firstname" />

        <label for="lastname">Last Name</label>
        <input type="text" placeholder="last name" id="lastname" />

        <label for="username">Username</label>
        <input type="text" placeholder="your username" id="username" />

        <label for="email">Email</label>
        <input type="email" placeholder="your email " id="email" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Sign up</button>
        <p>
          Have an account? Log in? <Link to={"/login"}>Log in </Link>
        </p>
      </form>
    </div>
  );
}
