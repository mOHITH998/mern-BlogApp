import React from 'react';
import Post from '../Post/Post';
import '../../App.css';

function Posts({ posts }) {
  // console.log(posts)
  return (
    <div className="posts">
      {posts.map((post, key) => (
        <Post post={post} key={key} />
      ))}
    </div>
  );
}

export default Posts;
