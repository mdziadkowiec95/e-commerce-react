import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    //   primary: {
    //     main: '#424242',
    //   },
    primary: blue,
    secondary: pink,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
