import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      alert(res.data.message);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">Login to BudgetBeacon</div>

        {/* App Intro Section */}
        <p className="login-intro">
          Welcome to <strong>🪙 BudgetBeacon</strong> — your GenAI-powered financial assistant!
          <br />
          Plan smart. Spend wisely. Live freely.
          <br />
          Manage expenses, get investment tips, track stocks, and boost your financial knowledge — all in one place.
        </p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn">
            Sign In
          </button>
          <div className="signup-link">
            Don't have an account? <Link to="/">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
