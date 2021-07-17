import React, { useState } from "react";
import axios from "axios";
import makeStyles from "./styles";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
      data && window.location.replace("http://localhost:3000/login");
    } catch (erorr) {
      error && window.location.reload();
      setError(true);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <div className={classes.register}>
      <div className={classes.registerWrapper}>
        <span className={classes.registerTitle}>Register</span>
        <form className={classes.registerForm} onSubmit={onHandleSubmit}>
          <label className={classes.label}>Username</label>
          <TextField
            type="text"
            className={classes.registerInput}
            placeholder="Enter your username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className={classes.label}>Email</label>
          <TextField
            type="text"
            className={classes.registerInput}
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={classes.label}>Password</label>
          <TextField
            type={showPassword ? "text" : "password"}
            className={classes.registerInput}
            placeholder="Enter your password..."
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button className={classes.registerBtn}>Register</button>
          {error && (
            <span className={classes.errorShow}>
              Please Entry your credentials
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
