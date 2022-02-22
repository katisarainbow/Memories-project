import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: '#2A1548',
    marginTop: '15px',
    marginLeft: '20px',
    textDecoration: 'none',
    fontFamily: ['Luckiest Guy', 'cursive'].join(','),
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0px'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  logout: {
    backgroundColor: '#3C1F66',
    color: 'white',

    '&:hover': {
      backgroundColor: '#2A1548',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },

    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#8B71B1',
    },
  }
}));
