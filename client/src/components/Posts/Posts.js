import React from 'react';
import Post from '../Post/Post';
import SideBars from '../SideBar/SideBars';
import '../../App.css';

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, key) => (
        <Post post={post} key={key} />
      ))}
    </div>
  );
}

export default Posts;
