import React, { useState, useEffect } from "react";
import Navbar from "./COMPONENTS/Navbar";
import Login from "./COMPONENTS/Login";
import Home from "./COMPONENTS/Home";
import About from "./COMPONENTS/About";
import Skills from "./COMPONENTS/Skills";
import Projects from "./COMPONENTS/Projects";
import Contact from "./COMPONENTS/Contact";
import { usePortfolio } from "./hooks/usePortfolio";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("Guest");

  // Restore session if available
  useEffect(() => {
    const sessionUsername = sessionStorage.getItem("username");
    const sessionUserId = sessionStorage.getItem("userId");
    if (sessionUsername && sessionUserId) {
      setIsLoggedIn(true);
      setUsername(sessionUsername);
      setUserId(sessionUserId);
    }
  }, []);

  // Fetch portfolio data with hook
  const { portfolio, loading, error } = usePortfolio(userId);

  // Handle successful login
  const handleLoginSuccess = (user) => {
    sessionStorage.setItem("username", user.username);
    sessionStorage.setItem("userId", user.userId);
    setIsLoggedIn(true);
    setUsername(user.username);
    setUserId(user.userId);
  };

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userId");
    setIsLoggedIn(false);
    setUserId(null);
    setUsername("Guest");
    window.location.href = "/";
  };

  // Conditional rendering
  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading portfolio...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600">
        {error}
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        No portfolio data.
      </div>
    );
  }

  // Render portfolio if everything is fine
  return (
    <div className="relative">
      <Navbar onLogout={handleLogout} username={username} />
      <Home portfolio={portfolio} />
      <div id="about">
        <About portfolio={portfolio} />
      </div>
      <div id="projects">
        <Projects portfolio={portfolio} />
      </div>
      <div id="skills">
        <Skills portfolio={portfolio} />
      </div>
      <div id="contact">
        <Contact portfolio={portfolio} />
      </div>
    </div>
  );
};

export default App;
