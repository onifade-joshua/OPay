import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Sign from "./Sign";
import Redirect from "./Redirect";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/app" replace />} />
        <Route path="/app" element={<App />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);