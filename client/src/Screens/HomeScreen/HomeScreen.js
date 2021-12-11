import React, { useState, useEffect } from 'react';
import Posts from '../../components/Posts/Posts';
import SideBar from '../../components/SideBar/SideBar'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import useStyles from '../styles';
import { CircularProgress } from '@material-ui/core';
import "../../App.css"

function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const { data } = await axios.get(
        `http://127.0.0.1:4000/api/v3/posts${search}`
      );
      setPosts(data.data);
      setLoading(false)
    };
    fetchPosts();
  }, [search]);
  const classes = useStyles();
  return (
    <>
      {
        loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <div className={` home ${classes.home}`}>
            <Posts posts={posts} />
            <SideBar sidePosts={posts} />
          </div>
        )
      }
    </>
  )

};

export default HomeScreen;
