import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  home: {
    display: 'flex',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '700',
    margin: '1rem',
    fontSize: '2rem',
  },
  single: {
    display: 'flex',
  },
  writePost: {
    paddingTop: '50px',
  },
  writePostForm: {
    postition: 'relative',
  },
  writeFormGroup: {
    marginLeft: '150px',
    display: 'flex',
    alignItems: 'center',
  },
  writeIcon: {
    width: '25px',
    height: '25px',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    borderRadius: '50%',
    padding: '1rem',
    marginRight: '1rem',
  },
  writePostInput: {
    padding: '1.3rem',
    fontSize: '2.4rem',
    border: 'none',
    width: '70vw',
    fontFamily: "'EB Garamond', serif",
    '&::placeholder': {
      color: 'rgb(189, 185, 185)',
      fontWeight: '400',
    },
    '&:focus': {
      outlineStyle: 'none',
    },
  },
  writePostText: {
    width: '70vw',
    height: '100vh',
    fontFamily: 'inherit',
    fontSize: '1.3rem',
  },
  writePostImg: {
    width: '100%',
    height: 'auto',
    backgroundSize: 'center',
    backgroundRepeat: 'no-repeat',

    borderRadius: '10px',
  },
  blogSettings: {
    display: 'flex',
  },
  blogSettingsCover: {
    flex: '9',
    padding: '1.3rem',
  },
  blogSettingsTitle: {
    display: 'flex',
    justifyContent: 'left',
    fontSize: '2rem',
  },
  userProfileWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPic: {
    width: '200px',
    height: '200px',
    margin: '2rem 0',
    objectFit: 'cover',
    borderRadius: '50%',
    fontSize: '3rem'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  userUpdate: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
