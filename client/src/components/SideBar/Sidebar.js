import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Avatar,
  Typography,
  Button,
  ButtonBase,
  Grid,
} from '@material-ui/core';
import useStyles from './styles';

const images = [
  {
    url: '../Img/post-4.jpg',
    title: 'Sports',
    width: '40%',
  },
  {
    url: '../Img/post-1.jpg',
    title: 'Tech',
    width: '40%',
  },
  {
    url: '../Img/post-2.jpg',
    title: 'Business',
    width: '40%',
  },
  {
    url: '../Img/cat-Music.jpg',
    title: 'Music',
    width: '40%',
  },
  {
    url: '../Img/cat-Ent.jpg',
    title: 'Entertainment',
    width: '40%',
  },
  {
    url: '../Img/cat-Sci.jpg',
    title: 'Science',
    width: '40%',
  },
];

function SideBars({ postSideBar }) {
  const location = useLocation();
  console.log(location);
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarWrapper}>
        <div className={classes.userInfo}>
          <Avatar
            className={classes.userSmall}
            src="../Img/profile2.jpg"
            alt="Remy Sharp"
          />{' '}
          <Link to="/settings">
            <span className={classes.userName}>{postSideBar.username}</span>
          </Link>
        </div>
        {console.log(postSideBar)}
        <Link to={`/post/${postSideBar}`} className={classes.Link}>
          <span className={classes.postTitle}>{postSideBar.title}</span>
        </Link>
        <div className={classes.postDetails}>
          <span>{new Date(postSideBar.createdAt).toDateString()}</span>
          <span>27 min ago</span>
        </div>
      </div>
    </div>
  );
}

export default SideBars;
