import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de datos (como a una API)
    console.log(`Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
    // Simular login exitoso y redirigir a otra página
    navigate('/dashboard');
  };

  const handlePasswordReset = () => {
    // Lógica para manejar la recuperación de contraseña
    console.log('Redirecting to password reset...');
    navigate('/reset-password');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <button type="button" className="forgot-password" onClick={handlePasswordReset}>
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="register-link">
          <p>Don’t have an account yet? <a href="/register">Create Account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
