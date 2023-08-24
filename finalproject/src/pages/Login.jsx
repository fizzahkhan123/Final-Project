import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    // Here you can implement your authentication logic
    // For this example, we'll just log the email and password
    console.log("Email:", email);
    console.log("Password:", password);
    if (email === "" || password === "") {
      return;
    }
    const response = await axios.post('api/login',{
      email,
      password
    });

    if (response.status === 200) {
      localStorage.setItem('username', email);
      navigate('/');
    }else{
      alert(response.data.message);
    }

  };

  return (
    <div className="login-container">
      <h1>Login</h1>
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
          
            <button className="btn btn-primary" onClick={handleLogin}>LogIn</button>
          
        </div>
        <div className="create-account">
        <p>Don't have an account? <Link to="/signup" className="create-account-link">Create one</Link></p>
        </div>
        
    </div>
  );
};

export default Login;
