import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [encodedImage, setEncodedImage] = useState("");
  const navigation = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    // Here you can implement your user registration logic
    // For this example, we'll just log the entered data
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    localStorage.setItem("username", username);
    saveUserInDB(username, email, password);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEncodedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveUserInDB = async (username, email, password) => {
    const response = await axios.post("http://localhost:3500/api/signup", {
      email: email,
      username: username,
      password: password,
      profilePic: encodedImage,
    });

    if (response.status == 200 || response.status == 201) {
      alert("User is created successfully");
      navigation("/");
    } else {
      alert("User was not created");
    }
  };

  return (
    <div className="signup-container">
      <div className="profile-image">
        <img
          src={
            encodedImage != ""
              ? encodedImage
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFfdPAfeJKYiwglp2z9IjDwphJAqEgyAsUv9nfcDLPVXRPzL2B0pLAvUoyVf4QTzoyso&usqp=CAU"
          }
          alt="Profile"
        />
      </div>

      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label>Upload Profile Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSignUp}
        >
          Sign Up
        </button>

      </form>
    </div>
  );
};

export default SignUp;
