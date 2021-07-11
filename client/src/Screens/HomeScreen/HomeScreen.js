import React, { useState, useEffect } from 'react';
import SideBars from '../../components/SideBar/SideBars';
import Posts from '../../components/Posts/Posts';
import { useLocation } from 'react-router-dom';
import {useMediaQuery, useTheme} from '@material-ui/core'
import axios from 'axios';
import useStyles from '../styles';
import "../../App.css"

function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/v3/posts${search}`
      );
      setPosts(data.posts);
    };
    fetchPosts();
  }, [search]);
  const classes = useStyles();
  return (
    <>
      <div className={` home ${classes.home}`}>
        <Posts posts={posts} />
        <SideBars sidePosts={posts} />
      </div>
 
    </>
  );
}

export default HomeScreen;
