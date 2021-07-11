import React, { useState } from 'react';
import axios from 'axios';
import makeStyles from './styles';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const classes = makeStyles();

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v3/users/register`,
        {
          username,
          email,
          password,
        }
      );
      data.all && window.location.replace('/login');
    } catch (erorr) {
      error && window.location.reload();
      setError(true);
    }
  };
  return (
    <div className={classes.register}>
      <div className={classes.registerWrapper}>
        <span className={classes.registerTitle}>Register</span>
        <form className={classes.registerForm} onSubmit={onHandleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className={classes.registerInput}
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            className={classes.registerInput}
            placeholder="Enter your email address..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className={classes.registerInput}
            placeholder="Enter your password..."
            minLength="8"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={classes.registerBtn}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
