import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import App from './App';
import theme from './styles/theme';

const Root = ({ store }) => (
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </>
);

export default Root;
