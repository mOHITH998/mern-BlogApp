import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  top: {
    height: '50px',
    backgroundColor: 'white',
    position: 'sticky',
    width: '100%',
    top: '0',
    display: 'flex',
    padding: '2rem 2rem',
    alignItems: 'center',
    zIndex: '999',
    fontFamily: "'Merriweather', serif",
    borderBottom: '1px #000 solid',
  },
  container: {
    height: '100vh',
  },
  topLeft: {
    flex: '3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem',
    textDecoration: ' none',
    color: '#333',
    fontWeight: '600',
  },
  topRight: {
    flex: '3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIcon: {
    fontSize: '20px',
    marginRight: '10px',
    color: '#444',
    cursor: 'pointer',
  },
  topCenter: {
    flex: '6',
  },
  linkOne: {
    textDecoration: 'none',
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: '600',
    padding: '0.4rem',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  topList: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0',
    padding: '0',
    listStyle: 'none',
  },
  topListItem: {
    marginRight: '20px',
    fontSize: '1rem',

    fontWeight: '600',
    cursor: 'pointer',
    padding: '1rem 0',
    '&:hover': {
      color: '#ccc',
    },
  },
  topListItemSignIn: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  home: {
    textDecoration: 'none',
    color: '#000',
    fontFamily: 'roboto',
    fontSize: '24px',
  },
  topImg: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '15px',
    cursor: 'pointer',
  },
  topSearchIcon: {
    fontSize: '18px',
    color: '#666',
    cursor: 'pointer',
  },
  topListItemUser: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
  },
  topProfilePic: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
  },
  userPic: {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  logo: {
    backgroundColor: '#ccc',
    padding: '0.2rem',
    width: '120px',
    borderTopLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    color: '#282e3e',
  }
}));
