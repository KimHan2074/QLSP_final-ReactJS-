import React, { useState } from 'react';

const LoginForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    
    if (handleSubmit) {
      handleSubmit({ email, password });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
};

export default LoginForm;


