import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For this example, we'll just log the email and password
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="connect-button">
          <Link to="/">
            <button className="btn btn-primary">LogIn</button>
          </Link>
        </div>
        <div className="create-account">
        <p>Don't have an account? <Link to="/signup" className="create-account-link">Create one</Link></p>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
