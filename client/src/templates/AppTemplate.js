import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import MenuContainer from '../containers/MenuContainer';

const AppTemplate = ({ children }) => (
  <MenuContainer>
    <Container>{children}</Container>
  </MenuContainer>
);

AppTemplate.propTypes = {
  children: PropTypes.node,
};

AppTemplate.defaultProps = {
  children: null,
};

export default AppTemplate;
