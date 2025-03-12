import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkPx_zFdsFkLjw5-2EciSWfP1sAzzvlxQ",
  authDomain: "opay-fee64.firebaseapp.com",
  projectId: "opay-fee64",
  storageBucket: "opay-fee64.appspot.com", // Fixed storage URL
  messagingSenderId: "395081861378",
  appId: "1:395081861378:web:6808d93cca017f7442da1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
