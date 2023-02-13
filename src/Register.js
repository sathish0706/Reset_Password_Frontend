import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleForm = (value) => {
    return setUserDetails((cred) => {
      return { ...cred, ...value };
    });
  };

  const handleRegistration = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://reser-password.onrender.com/register",
        userDetails,
        { withCredentials: true }
      );
      if (response) {
        navigate("/signin");
        console.log(response);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="signin-container">
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <h3 className="heading">User Registration</h3>
          <div className="form-group">
            <b>Name: </b>
            <br />
            <input
              type="text"
              className="form-control"
              id="name"
              value={userDetails.name}
              placeholder="Enter name"
              onChange={(e) => handleForm({ name: e.target.value })}
            />
          </div>
          <b>Email address: </b>
          <br />
          <input
            type="email"
            className="form-control"
            id="email"
            value={userDetails.email}
            placeholder="Enter email"
            onChange={(e) => handleForm({ email: e.target.value })}
          />
        </div>
        <br />

        <div className="form-group">
          <b>Password: </b>
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            value={userDetails.password}
            placeholder="Password"
            onChange={(e) => handleForm({ password: e.target.value })}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <br />
        <Link to={"/signin"}>Already have an account</Link>
      </form>
    </div>
  );
};

export default Register;
