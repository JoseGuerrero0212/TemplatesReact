import React, { useState } from 'react';
import '../styles/ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el email de restablecimiento
  };

  return (
    <div className="reset-container">
      <form onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ResetPassword;
