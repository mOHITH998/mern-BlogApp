import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  sideBar: {
    height: 'fit-content',
    padding: '1rem 0',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '1rem',
    flex: '3',
  },
  sideBarTitle: {
    margin: '10px',
    padding: '5px',
    fontWeight: '600',
    borderBottom: 'solid 3px #2c3e50',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: '19px',
    fontSize: '1rem',
  },
  userSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  userName: {
    fontWeight: '600',
    cursor: 'pointer',
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  postTitle: {
    fontWeight: '700',
    cursor: 'pointer',
    '&:hover': {
      color: '#464747',
    },
  },
  postDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
  },
  sideBarWrapper: {
    padding: '1rem',
    background: '#ecf0f1',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  userLogin: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  login: {
    padding: '10px',
    background: '#1e272e',
    color: '#f3f3f3',
    border: 'none',
    fontSize: '1rem',
    margin: '1.9rem 3rem',
  },
  signup: {
    padding: '10px',
    background: '#1e272e',
    color: '#f3f3f3',
    border: 'none',
    fontSize: '1rem',
    margin: '1.9rem 3rem',
  },

  // Categories
  catsTitle: {
    margin: '10px',
    padding: '5px',
    fontWeight: '600',
    borderBottom: 'solid 3px #2c3e50',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: '19px',
    fontSize: '1rem',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    alignItems: 'stretch',
    marginTop: '1rem',
    justifyContent: 'center',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6
      }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  Link: {
    textDecoration: 'none',
    marginTop: '15px',
    color: '#212121',
  },
  userLink: {
    textDecoration: 'none',
    color: '#2f3640',
  },
  //  Add Post
  addPostForm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPostInput: {
    width: '80%',
    margin: '0 1rem',
    padding: '0.4rem',
    background: '#f4f4f4',
    border: 'none',
    outline: 'none',
    fontSize: '1.1rem',
  },

  // Category
  catsLink: {
    textDecoration: 'none',
    color: '#57606f',
    "&:hover": {
      color: '#747d8c'
    }
  },
  sideBarItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sideBarList: {
    listStyle: 'none',
    marginBottom: '1.7rem',

  },
  sideBarListItem: {
    display: 'inline-block',
    width: '50%',
    marginTop: '1rem',
    cursor: 'pointer'
  },
}));
