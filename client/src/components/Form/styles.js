import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
		color: "white",
    marginTop: '15px',
  },
  buttonClear: {
    backgroundColor: '#7147A3',
    color: 'white',

    '&:hover': {
      backgroundColor: '#4F317A',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },

    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#8B71B1',
    },
  }
}));
