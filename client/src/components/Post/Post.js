import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from './style';

function Post({ post }) {
  const classes = makeStyles();
  const file = 'http://localhost:4000/image/';
  return (
    <div className={classes.post}>
      <img className={classes.postImage} src={file + post.image} alt="post" />
      <div className={classes.postContainer}>
        <Link to={`/post/${post._id}`} className={classes.Link}>
          <span className={classes.postTitle}>{post.title}</span>
        </Link>
        <div className={classes.postCats}>
          <Link to={`/?cat=${post.category}`} className={classes.Link}>
            <span className={classes.postCat}>{post.category}</span>
          </Link>
        </div>
        <p className={classes.postDescription}>{post.description}</p>
        <span className={classes.postDuration}>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
}

export default Post;
