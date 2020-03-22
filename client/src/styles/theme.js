import { createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#ede7f6',
    },
    secondary: pink,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;