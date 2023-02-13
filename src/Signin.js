import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [userCred, setUserCred] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleCred = (value) => {
    return setUserCred((cred) => {
      return { ...cred, ...value };
    });
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://reser-password.onrender.com/signin",
        userCred,
        { withCredentials: true }
      );
      if (response) {
        navigate("/home");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <h3 className="heading">User Login</h3>
          <b>Email address</b>
          <br />
          <input
            type="email"
            className="form-control"
            id="email"
            value={userCred.email}
            placeholder="Enter email"
            onChange={(e) => handleCred({ email: e.target.value })}
          />
        </div>
        <br />
        <div className="form-group">
          <b>Password</b>
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            value={userCred.password}
            placeholder="Password"
            onChange={(e) => handleCred({ password: e.target.value })}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br />
        <br />
        <Link to={"/forgot-password"}>Forgot password?</Link>&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/register"}>Do not have an account</Link>
      </form>
      <div></div>
    </div>
  );
};

export default Signin;
