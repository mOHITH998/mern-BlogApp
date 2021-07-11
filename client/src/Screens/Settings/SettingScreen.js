import React, { useContext, useState } from 'react';
import { Typography, TextField, Button, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import makeStyles from '../styles';
import { Context } from '../../context/Context';
import axios from 'axios';
import {
  UserUpdateFailure,
  UserUpdateRequest,
  UserUpdateSuccess,
} from '../../context/ActionContext';

function SettingScreen() {
  const classes = makeStyles();
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const PF = `http://localhost:4000/image/`;

  const updateProfile = async (e) => {
    e.preventDefault();
    dispatch(UserUpdateRequest);
    const updatedUser = {
      username,
      email,
      password,
    };

    if (file) {
      const formData = new FormData();
      const fileName = file.name;
      formData.append('name', fileName);
      formData.append('file', file);
      updatedUser.profilePic = fileName;
      try {
        await axios.post('http://localhost:4000/api/v3/upload', formData);
      } catch (error) {}
      try {
        setSuccess(true);
        const { data } = await axios.put(
          `http://localhost:4000/api/v3/users/${user.all._id}`,
          updatedUser
        );
        dispatch(UserUpdateSuccess(data));
      } catch (error) {
        dispatch(UserUpdateFailure());
      }
    }
  };

  const deleteProfile = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/v3/users/${user.all._id}`, {
        data: null,
      });
      window.location.reload();
    } catch (error) {}
  };

  return (
    <>
      <div style={{ lineHeight: '5rem' }}>
        <Typography
          variant="h4"
          display="block"
          align="left"
          style={{ marginTop: '1rem', textTransform: 'uppercase' }}
        >
          Settings
        </Typography>
        <div className={classes.userProfileWrapper}>
          <img
            src={file ? URL.createObjectURL(file) : PF + user.all.profilePic}
            alt="profilePic"
            className={classes.userPic}
          />

          <label htmlFor="fileInput">
            <IconButton aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <form onSubmit={updateProfile}>
          <TextField
            label="Username"
            style={{ margin: 8 }}
            placeholder={user.all.username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Email"
            style={{ margin: 8 }}
            placeholder={user.all.email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Change Password"
            style={{ margin: 8 }}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              marginLeft: '40%',
              marginTop: '2rem',
              background: '#05c46b',
              color: '#f4f4f4',
            }}
          >
            Update Profile
          </Button>
          {success && (
            <span className={classes.userUpdate}>
              Account Successfully Updated!
            </span>
          )}
          <Button
            variant="contained"
            onClick={deleteProfile}
            style={{
              display: 'block',
              marginTop: '10%',
              background: '#ff5e57',
              color: '#fff',
            }}
          >
            Delete Profile
          </Button>
        </form>
      </div>
    </>
  );
}

export default SettingScreen;
