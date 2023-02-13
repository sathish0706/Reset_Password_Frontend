import axios from "axios";
import { useState } from "react";
// import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://reser-password.onrender.com/forgotPassword",
        { email: email },
        { withCredentials: true }
      );
      if (response) {
        setIsEmailSent(true);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="signin-container">
      <h3 className="heading">Forgot Password</h3>
      {!isEmailSent ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <b>Email address</b>
            <br />
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <div>Reset password link has been sent to your email address</div>
      )}
    </div>
  );
};

export default ForgotPassword;
