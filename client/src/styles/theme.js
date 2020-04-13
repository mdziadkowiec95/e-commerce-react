import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b2b2b',
    },
    // primary: blue,
    secondary: {
      main: '#6a1b9a',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
