import React from "react";

export default function Profile() {
  return (
    <div className="login-class">
      <form className="login-form">
        <image className="img-profile"></image>

        <label>
          UserName
          <input name="userName" type="text" required={true} />
        </label>
        <label>
          Password
          <input name="password" type="password" required={true} />
        </label>

        <button>Save</button>
      </form>
    </div>
  );
}
