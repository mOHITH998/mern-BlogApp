import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Avatar, AppBar, withTheme, Toolbar, Container, useTheme, useMediaQuery } from '@material-ui/core';
import useStyles from './styles';
import { Context } from '../../context/Context';

import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-initials-sprites';

function NavBar() {
  const classes = useStyles();
  const PF = 'http://localhost:4000/image/';

  const { user, dispatch } = useContext(Context);
  const logOut = () => {
    dispatch({ type: 'LOG_OUT' });
    return window.location.replace('/login');
  };

  const generate = createAvatar(style, {
    seed: 'identicon'
  })
  return (
    <AppBar position='static' color='inherit'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            className={classes.logo}
          >
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
                      src={generate}
                      alt="Avatar"
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


        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default withTheme(NavBar);