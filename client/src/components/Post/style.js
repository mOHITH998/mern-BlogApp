import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  post: {
    display: 'flex',
    flexDirection: 'column',
    width: '385px',
    margin: '30px 25px 40px 25px',
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    padding: '0.5rem 0.5rem'
  },
  postImage: {
    objectFit: 'cover',
    borderRadius: '7px',
  },
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  postTitle: {
    fontWeight: '700',
    fontSize: '1.7rem',
    fontFamily: "'Josefin Sans', sans-serif",
    marginTop: '15px',
    '&:hover': {
      color: '#464747',
    },
  },
  postDescription: {
    fontFamily: " 'Source Sans Pro', sans-serif ",
    marginTop: '1rem',
    lineHeight: '1.5rem',
    color: '#68707b',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },
  postCat: {
    fontFamily: "' Hammersmith One', sans-serif ",
    fontSize: '0.9rem',
    marginRight: '10px',
    fontWeight: '600',
    color: '#211722',
    cursor: 'pointer',
  },
  postDuration: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#999',
    marginTop: '6px',
  },
  Link: {
    textDecoration: 'none',
    marginTop: '15px',
    color: '#212121',
  },
}));
