// utils/firestore.js
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const saveUserDetails = async (user) => {
  try {
    await addDoc(collection(db, "users"), {
      phoneNumber: user.phoneNumber,
      password: user.password, // ⚠️ Plain text (not recommended for production)
      pin: user.pin,
      createdAt: new Date(),
    });
    console.log("User details saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
