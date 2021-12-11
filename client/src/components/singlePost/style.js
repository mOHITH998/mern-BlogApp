import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  singlePost: {
    flex: '9',
    padding: '1rem',
    flexDirection: 'column',
  },
  singlePostWrapper: {
    padding: '1.2rem',
    paddingRight: '0',
  },
  singlePostTitle: {
    fontFamily: "'EB Garamond', serif",
    margin: '1rem',
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '2.8rem',
  },
  singlePostTitleEdit: {
    fontFamily: "'EB Garamond', serif",
    margin: '1rem',
    width: '100%',
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '2.8rem',
    background: '#f0f0ef',
    outline: 'none',
    border: 'none',
    color: '#575756',
  },
  singlePostInfo: {

    marginBottom: '1.3rem',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    color: '#2C3A47',
  },
  singlePostAuthor: {
    marginLeft: '9px',
    cursor: 'pointer',
  },
  singlePostImageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  singlePostImage: {
    width: '70%',
    height: '15%',
    borderRadius: ' 5px',
  },
  authorImg: {
    height: '60px',
    width: '45px',
    marginRight: '5px',
    color: 'black',
    background: '#ccc',
    padding: '2px',
    borderRadius: '30px',
  },
  singlePostDescp: {
    '&:first-letter': {
      marginLeft: '1rem',
      fontSize: '1.8rem',
      marginRight: '2px',
      fontWeight: '600',
    },
    marginTop: '25px',
    color: '#57606f',
    lineHeight: '1.5rem',
    fontSize: '18px',
  },
  Link: {
    color: '#2C3A47',
    textDecoration: 'none',
    '&:hover': {
      color: '#485460',
    },
  },
  editPost: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    cursor: 'pointer',
  },
}));
