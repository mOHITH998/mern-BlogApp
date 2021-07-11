import React from 'react';
import useStyles from './styles';

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.headerTitle}>
        <span className={classes.titleMd}>Make life Beautiful</span>
      </div>
      <img
        className={classes.imgHeader}
        src="/Img/header.jpg"
        alt=""
      />
    </div>
  );
}

export default Main;
