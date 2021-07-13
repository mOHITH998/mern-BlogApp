import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  loginWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: "url('../Img/login.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    height: 'calc(100vh - 65px)',
  },
  loginContainer: {
    background: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
  },
  loginTitle: {
    fontSize: '2.6rem',
    fontFamily: "'PT Serif', serif",
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    lineHeight: '4rem',
    width: '380px',
  },
  loginInput: {
    padding: '1.2rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    '&:focus': {
      outline: 'none',
    },
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  label: {
    fontSize: '1.4rem',
  },
  loginBtn: {
    padding: '0.7rem',
    marginTop: '1.5rem',
    background: '#2e86de',
    color: '#f4f4f4',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    '&:hover': {
      background: '#54a0ff',
    },
  },
  regBtn: {
    border: 'none',
    padding: '0.4rem',
    marginTop: '20px',
    color: '#2e86de',
    background: '#ffffff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  errorShow: {
    color: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
