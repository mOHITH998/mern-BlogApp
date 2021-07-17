import axios from "axios";
import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import {
  LoginRequest,
  LoginSuccess,
  LoginFailure,
} from "../../context/ActionContext";
import useStyles from "./styles";
import {
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Login() {
  const classes = useStyles();

  const userRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const { user, isFetching, dispatch } = useContext(Context);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(LoginRequest);
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v3/users/login`,
        {
          email: userRef.current.value,
          password: userRef.current.value,
        }
      );
      dispatch(LoginSuccess(data));
    } catch (err) {
      setError(true);
      dispatch(LoginFailure());
    }
  };
  console.log(onSubmit);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <div className={classes.loginWrapper}>
      <div className={classes.loginContainer}>
        <span className={classes.loginTitle}>Login</span>
        <form className={classes.loginForm} onSubmit={onSubmit}>
          <label className={classes.label}>Email</label>
          <input
            type="text"
            className={classes.loginInput}
            placeholder="Enter your Email"
            required={true}
            autoFocus
            ref={userRef}
          />
          <label className={classes.label}>Password</label>
          <TextField
            type={showPassword ? "text" : "password"}
            required
            minLength="8"
            className={classes.loginInput}
            placeholder="Enter your Password"
            ref={passwordRef}
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
          <button
            className={classes.loginBtn}
            type="submit"
            disabled={isFetching}
          >
            Login
          </button>
          {error && <span className={classes.errorShow}>Wrong Credential</span>}
        </form>
        <span style={{ fontWeight: "500" }}>
          New user?{" "}
          <Link to="/register">
            <button className={classes.regBtn}>Register</button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
