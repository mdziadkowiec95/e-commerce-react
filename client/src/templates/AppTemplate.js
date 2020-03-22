import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import MiniDrawer from '../components/MiniDrawer';

const AppTemplate = ({ children }) => (
    <MiniDrawer>
        <Container>
         {children}
        </Container>
    </MiniDrawer>
);

AppTemplate.propTypes = {
    children: PropTypes.node
}

AppTemplate.defaultProps = {
    children: null
}

export default AppTemplate;