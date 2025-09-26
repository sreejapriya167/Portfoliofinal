import React, { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginMessage("");

    try {
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        onLoginSuccess({ userId: data.userId, username: data.username });
      } else {
        const errorText = await response.text();
        setLoginMessage(errorText || "Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginMessage("Failed to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-sm border">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input type="text" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border rounded-md" required
          />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-md" required
          />
          {loginMessage && <p className="text-red-500 text-sm text-center">{loginMessage}</p>}
          <button type="submit" className="w-full bg-green-700 text-white py-3 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
