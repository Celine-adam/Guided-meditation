import React from "react";
import { Link } from "react-router-dom";
import axios from "../../Util/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Signup({ handleLogin }) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      userName: formData.get("userName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      const res = await axios.post("/api/user/create", data);
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.error("there was an error", error);
    }
  };
  return (
    <div className="signup-class">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label>
          First Name
          <input name="firstName" type="text" required={true} />
        </label>
        <label>
          Last Name
          <input name="lastName" type="text" required={true} />
        </label>
        <label>
          UserName
          <input name="userName" type="text" required={true} />
        </label>
        <label>
          E-mail
          <input name="email" type="email" required={true} />
        </label>
        <label>
          Password
          <input name="password" type="password" required={true} />
        </label>
        <button>Sign up</button>
        <p>
          Have an account? Log in? <Link to={"/"}>Log in </Link>
        </p>
      </form>
    </div>
  );
}
