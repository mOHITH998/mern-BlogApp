import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Avatar } from '@material-ui/core';
import useStyles from './styles';
import { Context } from '../../context/Context';

function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const PF = 'http://localhost:4000/image/';

  const { user, dispatch } = useContext(Context);
  const logOut = () => {
    dispatch({ type: 'LOG_OUT' });
    return window.location.replace('/login');
  };
  return (
    <header className={classes.top}>
      <Typography variant="h6">
        <Link to="/" className={classes.topLeft}>
          <i className="fas fa-pen-fancy" style={{ marginRight: '0.4rem' }} />
          MyBloG
        </Link>
      </Typography>
      <div className={classes.topCenter}>
        <ul className={classes.topList}>
          <li className={classes.topListItem}>
            <Link to="/" className={classes.linkOne}>
              HOME
            </Link>
          </li>

          <li className={classes.topListItem}>ABOUT</li>

          {user ? (
            <>
              <li className={classes.topListItem} onClick={logOut}>
                {user && 'LOGOUT'}
              </li>
              <Link to="/settings">
                <Avatar
                  src={PF + user.all.profilePic}
                  style={{ marginTop: '0.5rem' }}
                />
              </Link>
            </>
          ) : (
            <>
              <li className={classes.topListItem}>
                <Link className={classes.link} to="/login">
                  LOGIN
                </Link>
              </li>
              <li className={classes.topListItem}>
                <Link className={classes.link} to="/register">
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
