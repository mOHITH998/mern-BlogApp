import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  register: {
    height: 'calc(100vh - 65px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'url("../Img/undraw_mobile_payments_vftl.svg")',
    objectFit: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  registerWrapper: {
    background: '#6C63FF',
    padding: '2rem',
    borderRadius: '10px',
    width: '380px',
  },
  registerTitle: {
    fontSize: '3.1rem',
    fontFamily: 'PT Serif, serif',
    color: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerForm: {
    marginTop: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  registerInput: {
    padding: '1rem',
    background: 'white',
    border: 'none',
    marginTop: '0.6rem',
    borderRadius: '10px',
    '&:focus': {
      outline: 'none',
    },
    marginBottom: '0.8rem',
  },
  registerBtn: {
    marginTop: '1.3rem',
    padding: '1rem',
    width: '100%',
    border: 'none',
    background: '#1e272e',
    color: '#fff',
    borderRadius: '0.6rem',
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: '#485460',
    },
    textTransform: 'uppercase',
  },
}));
