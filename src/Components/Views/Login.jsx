import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DateContext } from "../../Context/DateContext";

export default function Login() {
  const { url } = useContext(DateContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      userName: formData.get("userName"),
      password: formData.get("password"),
    };
    try {
      const res = await axios.post(`${url}/api/user/login`, data, {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (error) {
      console.error("there was an error", error);
    }
  };

  return (
    <div className="login-class">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Log in</h3>

        <label>
          Username
          <input name="userName" type="text" required={true} />
        </label>
        <label>
          Password
          <input name="password" type="password" required={true} />
        </label>

        <button>Log In</button>
        <p>
          Don't have an account? <Link to={"/signup"}>Sign up</Link>
        </p>
      </form>
    </div>
  );
}
