import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        email,
        password,
      });
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">Create Your BudgetBeacon Account</div>

        {/* App Description */}
        <p className="login-intro">
          Join <strong>🪙 BudgetBeacon</strong> and take control of your financial future!
          <br />
          Get personalized expense tracking, smart investment suggestions, live stock updates, and more — powered by GenAI.
        </p>

        <form onSubmit={handleRegister}>
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
            Sign Up
          </button>
          <div className="signup-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
