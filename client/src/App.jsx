import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// Protected
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

// Pages
import Home from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import About from "./pages/About";
import FeedPage from "./pages/Feed";
import ProfilePage from "./pages/Profile";
import CreatePollPage from "./pages/CreatePoll";

// Layout
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

const App = () => {
  const token = localStorage.getItem("token"); // check login on page load

  return (
    <AuthProvider>
      <Router>
        {/* Navbar + Footer globally render */}
        <Navbar />
        
        <Routes>
          {/* Default → if logged in → /app/dashboard, else → /login */}
          <Route
            path="/"
            element={token ? <Navigate to="/app/dashboard" /> : <Navigate to="/login" />}
          />

          {/* Public Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/app" element={<ProtectedRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="feed" element={<FeedPage />} />
            <Route path="create" element={<CreatePollPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          {/* Unknown routes → redirect to home/dashboard */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
