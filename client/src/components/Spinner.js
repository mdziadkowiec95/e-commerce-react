import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'fixed',
    top: '50%',
    left: '50%',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Spinner = ({ size = '80px' }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={size} color="secondary" />
    </div>
  );
};

const isCssUnit = (props, propName, componentName) => {
  if (!/px|rem|em/.test(props[propName])) {
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to' +
        ' `' +
        componentName +
        '`. Validation failed.',
    );
  }
};

Spinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Spinner;
