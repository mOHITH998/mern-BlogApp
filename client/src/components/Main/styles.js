import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    marginTop: '40px'
  },
  headerTitle: {
    fontSize: '0.5rem',
    fontFamily: 'Shadows Into Light cursive',
  },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    fontFamily: 'Ubuntu, sans-serif',
  },
  titleMd: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    fontSize: '2rem',
    background: '#0be881',
    color: '#fff',
    padding: '1rem',
    '&:hover': {
      background: '#f4f4f4',
      color: '#0be881',
    },
  },
  imgHeader: {
    width: '100%',
    height: '450px',
    objectFit: 'cover'
  },
}));
