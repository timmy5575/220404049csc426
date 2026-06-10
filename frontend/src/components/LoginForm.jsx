import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!formData.username.trim()) {
      setMessageType("error");
      setMessage("Username is required.");
      return false;
    }

    if (!formData.password.trim()) {
      setMessageType("error");
      setMessage("Password is required.");
      return false;
    }

    if (formData.password.length < 6) {
      setMessageType("error");
      setMessage("Password must be at least 6 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        "https://two20404049csc426.onrender.com/login",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      setMessageType("success");
      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/dashboard", { state: { username: formData.username } });
      }, 1000);

    } catch (error) {
      setMessageType("error");
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Server error. Please try again.");
      }
    }
  };

  const handleReset = () => {
    setFormData({ username: "", password: "" });
    setMessage("");
    setMessageType("");
  };

  return (
    <>
      <div className="login-card">
        <h2>Login Authentication</h2>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="buttons">
            <button type="submit">Login</button>
            <button type="button" className="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="floating-card">
        <h4>Login</h4>
        <p>Username: <strong>admin</strong></p>
        <p>Password: <strong>123456</strong></p>
      </div>
    </>
  );
}

export default LoginForm;